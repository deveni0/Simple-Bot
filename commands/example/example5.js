const handler = async (m, { conn }) => {

  return conn.buttonV2(m.chat, {
    title: "VII7 Channel",
    subtitle: "Follow latest updates",
    text: "Choose from the list:",
    footer: "Anti-Intruder Bot",
    image: { url: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg" },
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardingOptions: { newsletterAdmin: true },
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363xxxxxxxxxx@newsletter",
        newsletterName: "VII7 News",
        serverMessageId: 1
      }
    },
    params: {
      limited_time_offer: { text: "Pomni AI", url: "t.me/venixov", copy_code: "https://is.gd/GYJBl3" },
      bottom_sheet: { in_thread_buttons_limit: 1, list_title: "قوائم", button_title: "MENU EEX" },
      tap_target_configuration: { title: "▸ X ◂", description: "bomboclard", canonical_url: "https://is.gd/GYJBl3", domain: "xxx.com", button_index: 0 }
    },
    buttons: [
      {
        name: "quick_reply",
        params: { display_text: "Confirm", id: "confirm" }
      },
      {
        name: "quick_reply",
        params: { display_text: "Cancel", id: "cancel" }
      },
      {
        name: "cta_url",
        params: {
          display_text: "Channel",
          url: "https://whatsapp.com/channel/0029VaQim2bAu3aPsRVaDq3v",
          merchant_url: "https://whatsapp.com/channel/0029VaQim2bAu3aPsRVaDq3v"
        }
      },
      {
        name: "cta_call",
        params: {
          display_text: "Call Us",
          phone_number: "+201234567890"
        }
      },
      {
        name: "cta_copy",
        params: {
          display_text: "Copy Code",
          copy_code: "VII7-2025"
        }
      },
      {
        name: "single_select",
        params: {
          title: "Choose Section",
          sections: [
            {
              title: "Sections",
              rows: [
                { id: "1", title: "Section 1", description: "Section 1 description" },
                { id: "2", title: "Section 2", description: "Section 2 description" },
                { id: "3", title: "Section 3", description: "Section 3 description" }
              ]
            }
          ]
        }
      },
      {
        name: "send_location",
        params: {}
      }
    ]
  }, { quoted: m });
  
};

handler.command = ['مثال5'];

export default handler;
