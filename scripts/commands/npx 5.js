const fs = require("fs");
module.exports = {
	config:{
	name: "npx7",
				version: "1.0.1",
				prefix: false,
	premium: true, 
	permssion: 0,
	credits: "AKASH", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
				cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	const content = event.body ? event.body : '';
	const body = content.toLowerCase();
	const axios = require('axios')
	const AKASH = ['https://i.imgur.com/l6r9Gab.mp4','https://i.imgur.com/oh84ihO.mp4','https://i.imgur.com/1CVhaSw.mp4']
		var rndm = AKASH[Math.floor(Math.random() * AKASH.length)];
const media = (
		await axios.get(
			`${rndm}`,
			{ responseType: 'stream' }
		)
	).data;

	if (body.indexOf("🖕")==0 || body.indexOf("😏,")==0 || body.indexOf("🥱")==0 || body.indexOf("😪")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "তোর Attitude দেখার টাইম নাই সর....//",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("😕", event.messageID, (err) => {}, true)
		}
	},
	start: function({ akash }) {
	}
}	
