let handler = async (m, { conn, text, groupMetadata }) => {
if (!text) return m.reply('🏓 Ingresa un nombre para el grupo.')
try{
m.reply('✅️ *CREANDO GRUPO* ✅️')
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
m.reply('https://chat.whatsapp.com/' + url)
} catch (e) {
m.reply(`✨️ Ocurrió un error inesperado.`)
}
conn.reply('573012482597@s.whatsapp.net', `💭 El Moderador ${nombre} Ha Creado Un Grupo Con ${wm}`, m, fake, );
}
handler.help = ['grupocrear <nombre>']
handler.tags = ['mods']
handler.command = ['creargc', 'newgc', 'creargrupo', 'grupocrear']
handler.mods = true
handler.registrado = true
export default handler
