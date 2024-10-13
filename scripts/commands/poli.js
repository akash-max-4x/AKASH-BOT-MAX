module.exports.config = {

name: "poli",

version: "1.0.",

permission: 0,

prefix: 'awto',

premium: true, 

credits: "AKASH",

description: "generate image from pollination",

category: "user",

usages: "poli text",

cooldowns: 2,

};

module.exports.run = async ({ api, event, args }) => {

const axios = require('axios');

const fs = require('fs-extra');

let { threadID, messageID } = event;

let query = args.join(" ");

if (!query) return api.sendMessage("put text/query", threadID, messageID);

let path = __dirname + `/cache/poli.png`;

const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {

responseType: "arraybuffer",

})).data;

fs.writeFileSync(path, Buffer.from(poli, "utf-8"));

api.sendMessage({

body: "আপনার কথা মতো ছবি তৈরি করা হয়েছে....//✅",

attachment: fs.createReadStream(path)

}, threadID, () => fs.unlinkSync(path), messageID);

};