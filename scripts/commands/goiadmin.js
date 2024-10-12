module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  permssion: 0,
  prefix: false,
  premium: false,
  credits: "AKASH",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  category: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100071539569680") {
    var aid = ["100071539569680"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["বস আকাশ কই তুমি তোমারে এক বলদে ডাকে__😁🤣","Mantion_দিস না _বস আকাশ এর মন ভালো নেই আস্কে-!💔🥀","বস আকাশ কে আর একবার মেনশন দিলে তোমারে থাবরাইয়া মুতের কালার চেঞ্জ কইরা ফালামু 🤭🙈🤖"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }