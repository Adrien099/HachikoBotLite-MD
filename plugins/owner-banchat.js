let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `✅ *La Bot Ha Sido Desactivada En Este Chat*`, m, fake, )

}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i

//handler.botAdmin = true
handler.admin = true 
//handler.group = true

export default handler