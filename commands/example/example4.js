const handler = async (m, { conn }) => {

  return conn.buttonCarousel(m.chat, {
    text: "Check our latest products:",
    footer: "Anti-Intruder Bot",
    cards: [
      {
        title: "Product 1",
        body: "High quality item",
        footer: "Price: $10",
        image: { url: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg" },
        buttons: [
          {
            name: "quick_reply",
            params: { display_text: "Buy Now", id: "buy_1" }
          },
          {
            name: "cta_url",
            params: {
              display_text: "Details",
              url: "https://example.com/p1",
              merchant_url: "https://example.com/p1"
            }
          }
        ]
      },
      {
        title: "Product 2",
        body: "Best seller item",
        footer: "Price: $20",
        image: { url: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg" },
        buttons: [
          {
            name: "quick_reply",
            params: { display_text: "Buy Now", id: "buy_2" }
          },
          {
            name: "cta_copy",
            params: {
              display_text: "Copy Code",
              copy_code: "PROD2-2025"
            }
          }
        ]
      },
      {
        title: "Product 3",
        body: "New arrival",
        footer: "Price: $30",
        image: { url: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg" },
        buttons: [
          {
            name: "quick_reply",
            params: { display_text: "Buy Now", id: "buy_3" }
          },
          {
            name: "single_select",
            params: {
              title: "Choose Size",
              sections: [
                {
                  title: "Sizes",
                  rows: [
                    { id: "s", title: "Small", description: "Size S" },
                    { id: "m", title: "Medium", description: "Size M" },
                    { id: "l", title: "Large", description: "Size L" }
                  ]
                }
              ]
            }
          }
        ]
      }
    ],
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardingOptions: { newsletterAdmin: true },
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363xxxxxxxxxx@newsletter",
        newsletterName: "VII7 News",
        serverMessageId: 1
      }
    }
  }, { quoted: m });
  
};

handler.command = ['مثال4'];

export default handler;
