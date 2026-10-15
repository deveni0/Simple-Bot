export default {
  event: 'group-participants.update',
  async run(data, { conn }) {
    const { id, participants, action } = data

    const mentions = participants.map(p => p.id || p)

    for (const p of participants) {
      const jid = p.id || p
      const number = jid.split('@')[0]

      if (action === 'add') {
        await conn.sendMessage(id, {
          text: `Welcome @${number} 👋`,
          mentions
        })
      }

      if (action === 'remove') {
        await conn.sendMessage(id, {
          text: `Goodbye @${number} 👋`,
          mentions
        })
      }
    }
  }
};