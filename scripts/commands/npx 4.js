const fs = require("fs");
module.exports = {
  config:{
  name: "npx6",
  version: "1.0.1",
  premium: true, 
  prefix: true,
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
  const AKASH = ["https://i.imgur.com/eSVQAgX.mp4","https://i.imgur.com/tIxL4lA.mp4","https://i.imgur.com/9g12zlF.mp4","https://i.imgur.com/yOhPN0C.mp4","https://i.imgur.com/D2gGTK5.mp4","https://i.imgur.com/bok7dqm.mp4","https://i.imgur.com/bZnS8IG.mp4","https://i.imgur.com/jjvvlaJ.mp4","https://i.imgur.com/nzrOvkh.mp4","https://i.imgur.com/02oGiPw.mp4","https://i.imgur.com/DEBQdmN.mp4","https://i.imgur.com/glq3Hlk.mp4","https://i.imgur.com/9eHsO6A.mp4","https://i.imgur.com/uKufFGQ.mp4","https://i.imgur.com/k56z74N.mp4","https://i.imgur.com/CL2X4yz.mp4","https://i.imgur.com/8xcGK2A.mp4","https://i.imgur.com/ZBBp7do.mp4","https://i.imgur.com/96VjXF8.mp4","https://i.imgur.com/Hz2czIS.mp4","https://i.imgur.com/h0p8Xdx.mp4","https://i.imgur.com/fztqIO8.mp4","https://i.imgur.com/1Zz9aVo.mp4","https://i.imgur.com/32DFsr8.mp4","https://i.imgur.com/ok6SloW.mp4","https://i.imgur.com/MCAwODI.mp4","https://i.imgur.com/OK7DdJL.mp4","https://i.imgur.com/0RKxzyC.mp4","https://i.imgur.com/Fl40TtV.mp4","https://i.imgur.com/r0E3tOP.mp4",'https://i.imgur.com/2oUXs44.mp4','https://i.imgur.com/gjaulFD.mp4','https://i.imgur.com/D0127fR.mp4','https://i.imgur.com/rdV22l6.mp4','https://i.imgur.com/gg6Vh6x.mp4','https://i.imgur.com/naq7XwF.mp4','https://i.imgur.com/DdErHEM.mp4','https://i.imgur.com/Gee37C0.mp4']
    var rndm = AKASH[Math.floor(Math.random() * AKASH.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🏍️")==0 || body.indexOf("🚲")==0 || body.indexOf("🚴🏻‍♀️")==0 || body.indexOf("🚗")==0 || body.indexOf("🏎️")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
    var msg = {
        body: "😇🌺",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
    }
  },
  start: function({ akash }) {
  }
}
