const fs = require("fs");
module.exports = {
  config:{
  name: "npx16",
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
  const AKASH = ['https://i.imgur.com/USqnjFS.mp4','https://i.imgur.com/GqMgThm.mp4','https://i.imgur.com/iP6Qlqm.mp4','https://i.imgur.com/u1FNb13.mp4']
    var rndm = AKASH[Math.floor(Math.random() * AKASH.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🎧")==0 || body.indexOf("🎸")==0 || body.indexOf("Arabic")==0 || body.indexOf("rimix")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
    var msg = {
        body: " _//-😵😇 ",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    }
  },
  start: function({ akash }) {
  }
}
