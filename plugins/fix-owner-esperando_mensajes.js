import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: `᥀·࣭࣪̇˖💎◗ 𝗘𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝘀𝗼𝗹𝗼 𝗲𝘀 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲 𝗲𝗻 𝗲𝗹 𝗕𝗼𝘁 𝗽𝗿𝗶𝗻𝗰𝗶𝗽𝗮𝗹.` },
      { quoted: fkontak }
    );
  }

  const sessionPath = './YoshiSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: `᥀·࣭࣪̇˖🗂️◗ 𝗟𝗮 𝗰𝗮𝗿𝗽𝗲𝘁𝗮 *YoshiSession*\n\n• 𝗡𝗼 𝗲𝘅𝗶𝘀𝘁𝗲 𝗼 𝗲𝘀𝘁𝗮 𝗯𝗮𝗰𝗶𝗮.` },
        { quoted: fkontak }
      );
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(
        m.chat,
        { text: `᥀·࣭࣪̇˖💎◗ 𝗡𝗼 𝘀𝗲 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗼 𝗯𝗮𝘀𝘂𝗿𝗮𝘀 𝗱𝗲𝗻𝘁𝗿𝗼 𝗱𝗲 𝗹𝗮 𝘀𝗲𝘀𝘀𝗶𝗼𝗻 𝗱𝗲𝗹 𝗯𝗼𝘁.` },
        { quoted: fkontak }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `᥀·࣭࣪̇˖✅◗ 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗻𝗱𝗼 𝗰𝗼𝘀𝗮𝘀 𝗶𝗻𝗻𝗲𝗰𝗲𝘀𝗮𝗿𝗶𝗮𝘀....` },
        { quoted: fkontak }
      );
    }
  } catch (err) {
    console.error('᥀·࣭࣪̇˖❌◗ 𝗘𝗿𝗿𝗼𝗿', err);
    await conn.sendMessage(
      m.chat,
      { text: `᥀·࣭࣪̇˖⚠️◗ 𝗢𝗰𝘂𝗿𝗿𝗶𝗼 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗮𝗹 𝗹𝗶𝗺𝗽𝗶𝗮𝗿 𝗹𝗮 𝗰𝗮𝗿𝗽𝗲𝘁𝗮 𝗬𝗼𝘀𝗵𝗶𝗦𝗲𝘀𝘀𝗶𝗼𝗻...` },
      { quoted: fkontak }
    );
  }
  await conn.sendMessage(m.chat, {text: `᥀·࣭࣪̇˖✅◗ 𝗦𝗲 𝗵𝗮 𝗯𝗼𝗿𝗿𝗮𝗱𝗼 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗮𝗺𝗲𝗻𝘁𝗲 𝗰𝗼𝘀𝗮𝘀 𝗶𝗻𝗻𝗲𝗰𝗲𝘀𝗮𝗿𝗶𝗮𝘀 𝗲𝗻 𝗹𝗮 𝗰𝗮𝗿𝗽𝗲𝘁𝗮 𝗬𝗼𝘀𝗵𝗶𝗦𝗲𝘀𝘀𝗶𝗼𝗻`}, { quoted: fkontak })}
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|delyoshiko)$/i;
handler.rowner = true
export default handler;