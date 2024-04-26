const axios = require('axios');

module.exports.config = {
		name: "Ai",
		version: 1.0,
		credits: "OtinXSandip",
		description: "AI",
		hasPrefix: false,
		usages: "{pn} [prompt]",
		aliases: ["gpt4","ai","Olive","arsene","Gabriel","safro"],
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

				await api.sendMessage(answer, event.threadID);
		} catch (error) {
				console.error("Error:", error.message);
		}
};
