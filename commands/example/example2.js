const handler = async (m, { conn }) => {

 return await conn.buttonV2(m.chat, {
  text: "Choose:",
  footer: "Bot",
  image: "https://i.pinimg.com/736x/71/e3/cd/71e3cd8597a3fc678234c08f2e4faa04.jpg", // or video 
  buttons: [
    {
      name: "quick_reply",
      buttonParamsJson: JSON.stringify({
        display_text: "Quick Reply",
        id: ".menu"
      })
    },
    {
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
        display_text: "Copy",
        copy_code: "hello123"
      })
    },
    {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "Open Link",
        url: "https://google.com",
        merchant_url: "https://google.com"
      })
    },
    {
      name: "cta_call",
      buttonParamsJson: JSON.stringify({
        display_text: "Call Us",
        phone_number: "+201000000000"
      })
    },
    {
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        title: "Select an Option",
        sections: [
          {
            title: "Main Section",
            highlight_label: "Popular",
            rows: [
              {
                header: "Option 1",
                title: "First Choice",
                description: "Description 1",
                id: ".option1"
              },
              {
                header: "Option 2",
                title: "Second Choice",
                description: "Description 2",
                id: ".option2"
              }
            ]
          }
        ]
      })
    }
  ],
  newsletter: {
    name: "Channel",
    jid: "120363409527479223@newslette"
  }
}, { quoted: m });


};

handler.command = ['مثال2'];
export default handler;