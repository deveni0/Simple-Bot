import { Client } from "meowsab";
import { subBots, subs } from "./system/sub.js";
import "moewsab/safe";
import * as baileys from "baileys"; 
import notif_ from "./system/notifications.js";

/* ======== Client Config  ====== */
const client = new Client({
/* ====== commands & session & baileys ======= */
  plugsdir: "commands",
  prefix: ["!", "."],
  library: [baileys],
  session_storage: { 
    type: "sqlite", // or json 
    path: "./auth" 
  },
/* ====== linking ======= */
  login: { 
    method: "pair", // or qr
    number: "201554582851",
    code: "VENI1234" 
  },
/* ====== owners ======= */
  owners: [
    { jid: "201066826750@s.whatsapp.net", lid: "247579682029763@lid" },
    { username: "v.nilx" }
  ]
});
/* ======== System Plugins & Notifications ====== */
let config = client.config;
config.info = {
  channel: {
    jid: "",
    name: "VA/CHANNEL"
  },
}
/* ======== System Plugins & Notifications ====== */
const plugins = client.plug()
plugins.notification(notif_)

/* ======= Function (Start) ===== */
const start = async () => {
  await client.connect();
  await subBots(client);
  await subs.start();
}


start().catch((err) => {
  console.log(err.message)
});

