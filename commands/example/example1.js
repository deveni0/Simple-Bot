const handler = async (m, { conn }) => {

 return await conn.buttonV1(m.chat, {
    text: "Hello this is a button message",
    footer: "Click the button below",
    buttons: [
        { displayText: "Click Me", id: "=> ..." },
        { displayText: "Cancel", id: "=> ..." }
    ],
    image: "https://i.pinimg.com/originals/c4/dd/7f/c4dd7f24d7ca1554653213655c9614cf.jpg"
 });


};

handler.command = ['مثال1'];
export default handler;