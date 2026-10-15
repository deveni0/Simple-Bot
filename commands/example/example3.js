const handler = async (m, { conn }) => {

  return await conn.buttonV3(m.chat, {
    image: 'https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg',
    text: 'Choose a format',
    buttons: [
      {
        name: "quick_reply",
        params: {
          display_text: "A",
          id: ". "
        }
      }, 
      {
        name: "quick_reply",
        params: {
          display_text: "B",
          id: ". "
        }
      },
      {
        name: "quick_reply",
        params: {
          display_text: "C",
          id: ". "
        }
      }
    ],
    newsletter: {
      jid: '120363409527479223@newsletter',
      name: 'Channel VA 🎶'
    }
  }, m);
  
};

handler.command = ['مثال3'];

export default handler;