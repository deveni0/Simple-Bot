const handler = async (m, { conn }) => {

 return await conn.inapp(m.chat, {
  title: 'bot system message',
  body: 'Processing, please wait...'
}, m)


};

handler.command = ['مثال8'];
export default handler;