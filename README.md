## 🐶 HachikoBotLite-MD 🐶

![logo](https://telegra.ph/file/f3b56b90b1725b62cd5d8.jpg)

*¡DIFRUTA DE ESTE QUERIDO PERRO!* 🐶


💻 INSTALACION MANUAL POR TERMUX

[`🏷 Instalar Termux Clic Aqui`](https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file)

> ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:

```bash
termux-setup-storage
```
```bash
apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn
```
```bash
git clone https://github.com/OfcDiego/HachikoBotLite-MD && cd HachikoBotLite-MD
```
```bash
yarn install && npm install
```
```bash
npm start
```

✨️ ACTIVAR EN TERMUX EN CASO DE DETENERSE
```bash
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd 
> cd HachikoBotLite-MD
> npm start
```

🌻 OBTENER OTRO CODIGO QR
```bash
> ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd HachikoBotLite-MD
> rm -rf HachikoSession
> npm start
```

💖 HACHIKO 24/7 (TERMUX)
```bash
> termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
```

🐶 ACTUALIZAR HACHIKO 
> Note Comandos para actualizar HachikoBot de forma automática
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/OfcDiego/HachikoBotLite-MD/master/update.sh | bash
```
Para que no pierda su progreso en HachikoBot, estos comandos realizarán un respaldo de su `database.json` y se agregará a la versión más reciente.

> Warning Estos comandos solo funcionan para TERMUX, REPLIT, LINUX

*🌟 DESARROLLADORES*
<a href="https://github.com/OfcDiego/HachikoBotLite-MD/graphs/contributors">
<img src="https://contrib.rocks/image?repo=OfcDiego/HachikoBotLite-MD" /> 
</a>

*☄️ AGRADECIMIENTOS*

<a
href="https://github.com/BrunoSobrino"><img src="https://telegra.ph/file/560191203b6749133bcf4.jpg" width="100" height="100" alt="Diego"/></a>

*👑 CREADORES*

<a
href="https://github.com/OfcDiego"><img src="https://telegra.ph/file/f3b56b90b1725b62cd5d8.jpg" width="120" height="120" alt="Diego"/></a> <a
href="https://github.com/HACHEJOTA"><img src="https://telegra.ph/file/3fae4e0f050e47db4bbf0.jpg" width="120" height="120" alt="JOTA"/></a>
> Copyright (c) 2024 **[OfcDiego](https://github.com/OfcDiego/HachikoBotLite-MD)**.
