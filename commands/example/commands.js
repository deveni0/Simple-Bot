const handler = async (m, { conn, cli }) => {
  const cmds = (await cli.commands()).map(x => `/ ${x.command[0]}`)
  await conn.sendMessage(m.chat, { text: cmds.join('\n') })
};

handler.command = ['menu'];
export default handler;