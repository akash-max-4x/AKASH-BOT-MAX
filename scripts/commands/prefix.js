module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  permission: 0,
  credits: "AKASH",
  prefix: true,
  description: "guide",
  category: "system",
  premium: false,
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = ["mpre","mprefix","prefix", "command mark", "What is the prefix of the bot?","PREFIX"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
		const prefix = threadSetting.PREFIX || global.config.PREFIX;
	        var link = ["https://i.postimg.cc/fTCfWqXM/Photoroom-20240914-090224.png"];
      if (config.PREFIX == null) {
        return out(`Robot Prefix : ${global.config.PREFIX} \nADMIN AKASH HASAN`)
      }
      else return out(`Robot Prefix : ${global.config.PREFIX} \nADMIN AKASH HASAN`)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("no prefix commands", event.threadID)
}
