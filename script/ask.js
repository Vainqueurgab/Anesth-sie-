const fonts = {
  a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁",
  i: "𝗂", j: "𝗃", k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈", 
  p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍", u: "𝗎", v: "𝗏", 
  w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓" 
};

const axios = require('axios');

module.exports.config = {
  name: "ai",
  version: 1.0,
  credits: "gab",//Api OtinXsandip
  description: "AI",
  hasPrefix: false,
  usages: "{pn} [prompt]",
  aliases: ["ai2", "bot"],
  cooldown: 0,
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const prompt = args.join(" ");
    if (!prompt) {
      await api.sendMessage("𝙶𝙰𝙱𝚁𝙸𝙴𝙻 2.0━━━━━━━━━━━━━ \n 🎯 𝚂𝚊𝚕𝚞𝚝 , 𝚖𝚘𝚒 𝚌'𝚎𝚜𝚝 𝙶𝚊𝚋𝚛𝚒𝚎𝚕. 𝚀𝚄𝙴𝙻 𝙴𝚂𝚃 𝚅𝙾𝚃𝚁𝙴 𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽❓.\n ━━━━━━━━━━━━━ ", event.threadID);
						return;
				}
    
    const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
    const answer = response.data.answer;

    let formattedAnswer = "";
    for (let char of answer) {
      if (fonts[char.toLowerCase()]) {
        formattedAnswer += fonts[char.toLowerCase()];
      } else {
        formattedAnswer += char;
      }
    }

    await api.sendMessage('☢ 𝙶𝙰𝙱𝚁𝙸𝙴𝙻\n━━━━━━━━━━━\n${formattedAnswer} 🌐`, event.threadID);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
