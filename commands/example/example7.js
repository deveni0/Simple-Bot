const handler = async (m, { conn }) => {

 return conn.linkPreview(m.chat, {
      text: "test",
      url: 'https://i.pinimg.com/736x/47/ea/06/47ea0627381b6277516211f811f55a8f.jpg',
      height: 438,
      width: 734,
      title: "𝐌 𝐀𝐫𝐢/𝐍 — 𝐕𝐈𝐈7 🎀 | 𝐁𝐨𝐭 𝐢𝐬 𝐛𝐮𝐢𝐥𝐭 𝐨𝐧 𝐭𝐡𝐞 𝐌𝐄𝐎𝐖𝐒𝐀𝐁 𝐟𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤",
      description: "𝙰 𝚜𝚒𝚖𝚙𝚕𝚎 𝚋𝚘𝚝 𝚏𝚘𝚛 𝚏𝚞𝚗 𝚊𝚗𝚍 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚜"
    });

};

handler.command = ['مثال7'];
export default handler;