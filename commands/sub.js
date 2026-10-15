import { createRequire } from "node:module";
import { Misc } from 'meowsab';
const require = createRequire(import.meta.url);

const fff = async (m, { conn, text }) => {
  const { subs } = require("../system/sub.js");
  if (!subs) return m.reply("نظام البوتات الفرعية غير جاهز بعد");

  let digits = m.jid?.split("@")[0]?.replace(/\D/g, "");

  if (!digits) {
    digits = text?.trim().replace(/\D/g, "");
    if (!digits) return m.reply("❌ يرجى إدخال الرقم. مثال: `!تنصيب 201151816579`");
  }
  
  if (subs.get(digits)?.connected) return m.reply(`متصل بالفعل: ${digits}`);

  const code = await subs.addBot(digits);
  if (!code) return m.reply("فشل في إنشاء رمز الربط");
  
  if (code.full) return m.reply(">❌< اكتمل عدد البوتات المسموح بتنصيبهم استنى يفصل حد");

  await m.reply(`الرمز: ${code}\n\n📲 أدخل هذا الرمز في تطبيق الواتساب الخاص بك`);

  for (let i = 0; i < 20; i++) {
    await Misc.delay(3000);
    if (subs.get(digits)?.connected) {
      return conn.sendMessage(m.chat, { text: `✅ تم الاتصال بنجاح: ${digits}` });
    }
  }

  await conn.sendMessage(m.chat, { text: "⏱️ انتهت المهلة الزمنية" });
};

fff.command = ["تنصيب"];
fff.noSub = true;

export default fff;
