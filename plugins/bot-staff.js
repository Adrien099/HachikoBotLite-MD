let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `💫 *EQUIPO STAFF*
🥷 *Bot:* ${global.botname}
🪴 *Ofc Bot:* ${ofcbot}
☁️ *Versión:* ${global.vs}

👑 *Propietario:*

• Diego-YL-177
☘️ *Rol:* ${user.role}
✨️ *Número:* ${creador}
🏆 *GitHub:* https://github.com/Diego-YL-177

💫 *Colaboradores:*

• GataNina-Li
☘️ *Rol:* ${user.role}
✨️ *Número:* Wa.me/593968263524
🏆 *GitHub:* https://github.com/GataNina-Li

• elrebelde21
☘️ *Rol:* ${user.role}
✨️ *Número:* Wa.me/573147616444
🏆 *GitHub:* https://github.com/elrebelde21

• KatashiFukushima
☘️ *Rol:* ${user.role}
✨️ *Número:* Wa.me/51948705559
🏆 *GitHub:* https://github.com/KatashiFukushima

• AzamiJs
☘️ *Rol:* ${user.role}
✨️ *Número:* Wa.me/5214434703586
🏆 *GitHub:* https://github.com/AzamiJs

• Alba070503
☘️ *Rol:* ${user.role}
✨️ *Número:* Wa.me/59169082575
🏆 *GitHub:* https://github.com/Alba070503

• Danixl.Js
☘️ *Rol:* ${user.role}
✨️ *Número:* Wa.me/595983799436
🏆 *GitHub:* https://github.com/DanixlJs`

await conn.sendFile(m.chat, 'https://telegra.ph/file/c366c44e1efae9417a46d.jpg', 'yoshiko.jpg', staff.trim(),
fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `💭 Staff Oficial`,
mediaType: 1,
sourceUrl: `${yt}`,
thumbnailUrl: `https://qu.ax/XRLE.jpg`
}}
}, { mentions: m.sender })

}
handler.command = /^(staff|colaboradores)$/i
export default handler