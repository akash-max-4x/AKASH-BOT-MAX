module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "AKASH",
    prefix: true,
    premium: true, 
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       :  AKASH HASAN
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : AKASH HASAN
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : ISLAM
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: MYMENSINGH
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: MYMENSINGH
𝐆𝐞𝐧𝐝𝐞𝐫.   : MALE
𝐀𝐠𝐞           : 19+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : SINGEL
𝐖𝐨𝐫𝐤        : NOT FOUND
𝐆𝐦𝐚𝐢𝐥       : akash768004@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801980871152
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/akash_black
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/akash.black.hacker.bd`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.postimg.cc/GppkmXmC/1726279543838.jpg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
