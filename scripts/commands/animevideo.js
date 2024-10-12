const axios = require('axios');
const fs = require('fs');

module.exports.config = {
    name: "animevideo", 
    version: "1.0.0", 
    permssion: 0, 
    premium: false,
    prefix: true,
    credits: "AKASH",
    description: "SOME ANIMEVIDEO BY X2 SERVER",
    category: " VIDEO", 
    usages: "/animevideo",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    try {
      const rt = await axios.get("https://x2-video-api.onrender.com/anime")
      const url = rt.data.resultX2.data;
        const response = await axios.get(url, { responseType: "stream" });

        const videoPath = './anime_video.mp4';
        const writer = fs.createWriteStream(videoPath);

        response.data.pipe(writer);

        writer.on('finish', () => {
            api.sendMessage({ body: "♻️--『 AKASH BOT 』--♻️", attachment: fs.createReadStream(videoPath) }, event.threadID);
        });

        writer.on('error', (err) => {
            console.error(err);
        });
    } catch (e) {
        console.log(e);
    }
};
