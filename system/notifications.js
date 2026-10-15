const notif_ = async (ctx, { m, conn }) => {
  ctx.admin(() => {
    return conn.sendMessage(m.chat, { text: "only admin" }, { quoted: m });
  });

  ctx.owner(() => {
    return conn.sendMessage(m.chat, { text: "only owner" }, { quoted: m });
  });

  ctx.group(() => {
    return conn.sendMessage(m.chat, { text: "only in groups" }, { quoted: m });
  });

  ctx.private(() => {
    return conn.sendMessage(m.chat, { text: "only in private chat" }, { quoted: m });
  });

  ctx.botAdmin(() => {
    return conn.sendMessage(m.chat, { text: "bot must be admin" }, { quoted: m });
  });

  ctx.cooldown((remaining) => {
    const secs = Math.ceil(remaining / 1000);
    return conn.sendMessage(m.chat, { text: `wait ${secs}s` }, { quoted: m });
  });

  ctx.disabled(() => {
    return conn.sendMessage(m.chat, { text: "command disabled" }, { quoted: m });
  });
};

export default notif_;