//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chanjinhuyk@gmail.com";
global.location = "Douala, congo-brazaville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/ChanJinhuyk/JINHUYK-MD-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "50944562059";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05iM2YvK0RBazA0d2MyclpWRkMzVzRVdFVwU25CWVhHcFdmRWhRS1ZVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemJlRUF2VE9iaTZqK0JDbkNaTHBBNG8waCtIU01IVGJtek1JZTlBcXl4bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRHJsWUQ4V2J2RHZZZ3lKdzY5RjNXNGxCamhKZHlaWXM2MldwMW1RdVdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZa1FWaFp3Vm4xNXQyb3h2OUVLaFpTVlFacThGTTNhUStpM0ZJTUFrbURZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOa1Z6NzROUGhIUCtvMXc0ZU9mN0dmZWtaVVNUM05PTExUUTdCZlRVRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJDT0xDRElBa2pUcVdFdXJkaUEzVUJyUGp5L2lLb05GbmpNMENFS1lxRHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01valFkWkJxN2p6Wng3QnVybjhEVFZ6VlUrRExueUUwa0F4cVlGYk5tcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0V1ZENzdDNiYkgwa2UzTFc4c1JZOWdZNGd4RnZKczhIYzJJb0ExR0R6UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYxNHR1VnBiWGZSdE5uTVZ6d0JHcUkyS1ZZaTE0ZnR4cUY4VGg4Y0FNaVBmaWx5V1ovRWdBM012ZnBmVytCZ0k3d3ZHTkN0bk9jc0ZCL0hJTVYyZ0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJBT2pXdS91STVuQzZhQTltWmFhUVdlTVZmeHJwcmJ2VWJNZjZVbno1c1FBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGdC14QUhoNVNaeVQ0cUd2MVpoZHBRIiwicGhvbmVJZCI6IjcxN2RhMDkyLWNlZjctNDE5ZS04MGQ5LThkNTYxZjllOGExOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMMW1sekcxSk1Xc3lIMU5RUUFhaEdmdXc5UkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHR6RTVzME5aNEJVWUxlY1llQkF2SVpsNnBvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY0S1M0WFNLIiwibWUiOnsiaWQiOiI1MDk0NDU2MjA1OToyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlbjwnZaG8J2Wl/CdlpvwnZaK8J2Wk/Cdlpgg8J2WkfCdloog8J2Wm/CdlorMgfCdlpfwnZaO8J2WmfCdlobwnZaH8J2WkfCdloog8J2WivCdlpPwnZaI8J2WjfCdlobwnZaT8J2WmfCdlorwnZaa8J2WlyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGpQeVlnR0VOZXgwYjRHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicVdscFRycFYwQWdlNkpKT1hHM05uQmswWk9nVHdXdzF1c29GUklJSUUwRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWG54d2h4LzlRbVFoWXZMeXV1VnhTRjBHSmdpbXN5NkZQamFrV3Q0cW01Y2FaNW5oVlBDSm0vdHF6amlIbU1kSyt3RnVoYThUWHBDdXVqSWlBRzRyQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlB1RHZ5UURMNnhUVG1kSS9jTlp2ZkVzeVlYRWZ1VFJ5aGd5Y3ZXZVl0QXh3NGxiZnd5anVKN2JWUUNMSUFPZlVFYXRLa2lDSjNpcjRJRFp1YWVSSkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDQ1NjIwNTk6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbHBhVTY2VmRBSUh1aVNUbHh0elp3Wk5HVG9FOEZzTmJyS0JVU0NDQk5CIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxOTY5NjM2fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🍂𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍂",
  packname: process.env.PACK_NAME || "🍂𝐉𝐈𝐍𝐇𝐔𝐘𝐊-𝐌𝐃🍂",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "🍁𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍁",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
