let pp = './Menu.jpg'
let handler = async (m, { conn, command }) => {
let str = `*◜🌸 GRUPOS OFICIALES 🌸◞*

👑 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 1
${gp1}

👑 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 2
${gp2}

 *◜🌸 COLABORACIÓN 🌸◞*

🌺 𝐆𝐚𝐭𝐚𝐁𝐨𝐭 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp3}

🌺 𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐭𝐲𝐁𝐨𝐭 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp4}

🌺 𝐍𝐨𝐯𝐚𝐁𝐨𝐭 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp5}

 *◜🌸 CANAL OFICIAL 🌸◞*

✨️ 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃
${channel}`
m.react('🔵') 
    await conn.sendFile(m.chat, pp, 'yoshiko.jpg', str, estilo)}

handler.command = /^grupos|linkyl|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler