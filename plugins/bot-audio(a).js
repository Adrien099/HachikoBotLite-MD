const handler = async (m, {conn}) => {
  if (!db.data.chats[m.chat].audios) return;
  if (!db.data.settings[conn.user.jid].audios && !m.isGroup) return;
  //const s = seconds: '1934.4'
  const vn = 'https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/media/a.mp3';
  conn.sendPresenceUpdate('recording', m.chat);
  conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `a.mp3`}, {quoted: fkontak});
};
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/
export default handler;