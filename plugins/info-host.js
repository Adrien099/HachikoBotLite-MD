let handler = async (m, { conn, usedPrefix, command, text }) => {

const sections = [{
title: `Título de la sección`,
rows: [
{ header: 'Encabezado1', title: "Título1", description: 'Descripción1', id: usedPrefix + "menu" }, 
{ header: 'Encabezado2', title: "Título2", description: 'Descripción2', id: "Id2" }, 
{ header: 'Encabezado3', title: "Título3", description: 'Descripción3', id: "Id3" }, 
{ header: 'Encabezado4', title: "Título4", description: 'Descripción4', id: "Id4" }, 
]},]  
const messages = [[ // CARRUSEL 1
'Descripción de Carrusel 1', 
'Footer de Carrusel 1',
'https://telegra.ph/file/24b24c495b5384b218b2f.jpg',
[['Botón1', usedPrefix + 'menu'], ['Botón2', 'Id2'] /* etc... */],
[['Texto para copiar 1'], ['Texto para copiar 2'] /* etc... */],
[['Enlace1', channel], ['Enlace2', 'https://example.com/link2'] /* etc... */],
[['Botón Lista 1', sections], ['Botón Lista 2', sections] /* etc... */]
], [ // CARRUSEL 2
'Descripción de Carrusel 1', 
'Footer de Carrusel 1',
'https://telegra.ph/file/24b24c495b5384b218b2f.jpg',
[['Botón1', usedPrefix + 'menu'], ['Botón2', 'Id2'] /* etc... */],
[['Texto para copiar 1'], ['Texto para copiar 2'] /* etc... */],
[['Enlace1', channel], ['Enlace2', 'https://example.com/link2'] /* etc... */],

await conn.sendCarousel(m.chat, 'Texto', 'Footer', 'Titulo de Carrusel', messages, m)            

}
handler.command = /^(carousel)$/i
export default handler

/*let handler = async (m, { conn, command, usedPrefix }) => {
let cafirexostxt = `
_Optimice la implementación de *YoshikoBot* mediante la integración en un servicio de alojamiento de alto rendimiento._

🔵 \`\`\`Información del Host\`\`\`

💻 *Página*
https://www.cafirexos.com

✨ *Dashboard*
https://dash.cafirexos.com

⚙️ *Panel*
https://panel.cafirexos.com

📢 *Canal de WhatsApp*
https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

💥 *Grupo de WhatsApp*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ

📧 *Correo*
contacto@cafirexos.com

🧑‍💻 *Contacto (Diego Flores)*
https://wa.me/50497150165`

let txt = `*¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 📱⏳

¡Tenemos la solución perfecta para ti! 🎉 Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 💸 

🖥️ *Totalmente compatible con YoshikoBot:* Disfruta al máximo de su potencial en nuestros servidores de alto rendimiento, asegurando una experiencia fluida y de alta calidad. El staff de YoshikoBot y Infinity-Host se encarga de que disfrutes de todas sus funciones al máximo. 😺✨

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://www.infinity-wa.xyz/

*🟢 Dashboard:*
https://dashboard.infinitywa.xyz

⚙️ *Panel*
https://dashboard.infinitywa.xyz

💥 *Grupo Support whatsapp:*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

*🟣 Discord:*
https://discord.com/invite/vgfpe4Nwd8


🗣📲 *Contacto:*
• https://www.facebook.com/elrebelde21
• wa.me/573147616444

No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀`

if (command == 'cafirexos') {
await conn.sendFile(m.chat, 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo.png', 'cafi.jpg', cafirexostxt.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔵 C A F I R E X O S 🔵`,
body: `✅ Hosting de Calidad`,
mediaType: 1,
sourceUrl: redesYoshi,
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png'
}}
}, { mentions: m.sender })
}

if (command == 'infinity' || command == 'infinityWa' || command == 'infohost' || command == 'hosting') {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘𝐖𝐀-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/EQTd.jpg', 
sourceUrl: redesYoshi}}},
{ quoted: fkontak})
}}

handler.command = /^(cafirexos|infohost|hosting|infinitywa|infinity)$/i
export default handler*/