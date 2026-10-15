import { SubBots } from "meowsab";

export let subs;
export async function subBots(client) {

  subs = new SubBots({
    root: "./sessions", // مسار فولدر السيشنات
    storage: "auto", // خليها auto بتاعت السيشن
    max: 60, // عدد البوتات
    code: "VA123456", // كود الربط
    main: client,
    settings: {},
  });


  subs.on("ready", (sock) => {
    console.log("ready:", sock.user?.id)
  }); 

  await subs.start();
  return subs;
}

