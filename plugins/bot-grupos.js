let pp = './Menu.jpg'
let handler = async (m, { conn, command }) => {
let str = `*◜🌸 GRUPOS OFICIALES 🌸◞*

👑 ${wm} 1
${gp1}

👑 ${wm} 2
${gp2}

 *◜🌸 COLABORACIÓN 🌸◞*

🌺 𝐆𝐚𝐭𝐚𝐁𝐨𝐭 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp3}

🌺 𝐍𝐨𝐯𝐚𝐁𝐨𝐭 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp4}

🌺 𝐀𝐥𝐢𝐬𝐚𝐊𝐮𝐣𝐨𝐮 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp5}

🌺 𝐒𝐡𝐢𝐳𝐮𝐤𝐚𝐁𝐨𝐭 & 𝐘𝐨𝐬𝐡𝐢𝐤𝐨𝐁𝐨𝐭
${gp6}

 *◜🌸 CANAL OFICIAL 🌸◞*

✨️ ${namechannel}
${channel}`
m.react('🔵') 
    await conn.sendFile(m.chat, pp, 'yoshiko.jpg', str, estilo)}

handler.command = /^grupos|linkyl|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler