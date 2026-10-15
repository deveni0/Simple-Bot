export default {
   auto: true,
   run: async (m) => {
    if (m.text === "السلام عليكم") {
     m.reply("وعليكم السلام")
    }
  }
}
/* مجرد انك تحط ( return "stop" ) ف اي شرط البوت هيقف مع الشرط ف دي تنفع لـ اوامر زي يتكلم مع الأونر بس أو الادمن بس أو ميتكلمش ف شرط معين و الخ
** و الـ contxt بتاخد:
 - isSubBot 
 - isAdmin 
 - isBotAdmin 
 - cli
** مثال:

 run: async (m, { isSubBot, isAdmin, isBotAdmin, cli }) => {
 
}
*/