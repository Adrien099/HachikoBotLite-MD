import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('👑 Ingresa un texto para realizar la búsqueda.')
try {
m.react(rwait)
let { dl_url } = await Scraper.pinterest(text)
//await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `💌 *Resultados De:* ${text}\n${global.textbot}`, m, null, rcanal)
await conn.sendCarousel(chat, '💗 *Resultados de Pinterest*', 'Imágenes', '✨ Imágenes de Pinterest', dl_url)
m.react(done)
} catch {
m.react(error)
}}
handler.help = ['pinterest <texto>']
handler.tags = ['internet']
handler.command = ['pinterest']
handler.limit = 1
handler.register = true
export default handler