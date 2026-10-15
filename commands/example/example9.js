const handler = async (m, { conn }) => {

 return await conn.docThumb(m.chat, {
  image: 'https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg',
  size: 1024000,
  fileName: 'M ari/N 🎀'
}, m)


};

handler.command = ['مثال9'];
export default handler;