
const fs = require("fs")
const { writeFile, readFile } = require("fs");

const chalk = require("chalk")
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios");
const { isAdmin, parsedJid, isUrl } = require("../lib");

const events = require("../lib/event");
const { command, isPrivate } = require("../lib");

const { hostname, uptime, totalmem, freemem } = require("os");
const { configz } = require("dotenv");
const fetch = require('node-fetch')
const {cloudspace} = require("../lib/alfabase");





//read database jid









command(
    {
      pattern: "bass",
      fromMe:isPrivate,
      desc:"Text Pro Image Maker",
      type:"textmaker",
    },
    async (message, match, m) => {

//case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
if (!(message.reply_message.audio)) return message.sendMessage("_please reply to an audio..._")

let media = await message.quoted.download();

try {
    let set
    if (/bass/.test(message.text)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
    if (/blown/.test(message.text)) set = '-af acrusher=.1:1:64:0:log'
    if (/deep/.test(message.text)) set = '-af atempo=4/4,asetrate=44500*2/3'
    if (/earrape/.test(message.text)) set = '-af volume=12'
    if (/fast/.test(message.text)) set = '-filter:a "atempo=1.63,asetrate=44100"'
    if (/fat/.test(message.text)) set = '-filter:a "atempo=1.6,asetrate=22100"'
    if (/nightcore/.test(message.text)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
    if (/reverse/.test(message.text)) set = '-filter_complex "areverse"'
    if (/robot/.test(message.text)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
    if (/slow/.test(message.text)) set = '-filter:a "atempo=0.7,asetrate=44100"'
    if (/smooth/.test(message.text)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
    if (/tupai/.test(message.text)) set = '-filter:a "atempo=0.5,asetrate=65100"'

    if (message.reply_message.audio) {
        message.sendMessage("_please wait..._")


    let ran = `${Math.floor(Math.random() * 10000)}`+'.mp3'

    exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return message.sendMessage(err)
    let buff = fs.readFileSync(ran)
    message.sendMessage(buff, {caption: "_Media message.jid Alien-Alfa"}, "audio");
    fs.unlinkSync(ran)
    })
    } 
    
    else message.sendMessage(media.mime)
    } catch (e) {
    message.sendMessage(`${e}`)
}
});







//============================================================================================================================================

command({ on: "text", fromMe: false }, async (message, match, m) => {
  switch(message.text){

case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': 
case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': 
case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18': 
case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': 
case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': 
case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': 
case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': 
case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': 
case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': 
case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': 
case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': 
case 'sound67': case 'sound68': case 'sound69': case 'sound70': case 'sound71': case 'sound72': 
case 'sound73': case 'sound74': case 'sound75': case 'sound76': case 'sound77': case 'sound78': 
case 'sound79': case 'sound80': case 'sound81': case 'sound82': case 'sound83': case 'sound84': 
case 'sound85': case 'sound86': case 'sound87': case 'sound88': case 'sound89': case 'sound90': 
case 'sound91': case 'sound92': case 'sound93': case 'sound94': case 'sound95': case 'sound96': 
case 'sound97': case 'sound98': case 'sound99': case 'sound100': case 'sound101': case 'sound102': 
case 'sound103': case 'sound104': case 'sound105': case 'sound106': case 'sound107': case 'sound108': 
case 'sound109': case 'sound110': case 'sound111': case 'sound112': case 'sound113': case 'sound114': 
case 'sound115': case 'sound116': case 'sound117': case 'sound118': case 'sound119': case 'sound120': 
case 'sound121': case 'sound122': case 'sound123': case 'sound124': case 'sound125': case 'sound126': 
case 'sound127': case 'sound128': case 'sound129': case 'sound130': case 'sound131': case 'sound132': 
case 'sound133': case 'sound134': case 'sound135': case 'sound136': case 'sound137': case 'sound138': 
case 'sound139': case 'sound140': case 'sound141': case 'sound142': case 'sound143': case 'sound144': 
case 'sound145': case 'sound146': case 'sound147': case 'sound148': case 'sound149': case 'sound150': 
case 'sound151': case 'sound152': case 'sound153': case 'sound154': case 'sound155': case 'sound156': 
case 'sound157': case 'sound158': case 'sound159': case 'sound160': case 'sound161':{
  if(isPrivate) return;
XeonBotInc_dev = await fetch(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${message.text}.mp3`)
await message.client.sendMessage(message.jid, { audio: XeonBotInc_dev, mimetype: 'audio/mpeg', ptt: true })     
} break

}

});



//============================================================================================================================================
command({
  pattern: "spotify",
      fromMe: true,
      desc: "Download music from Spotify",
      dontAddCommandList: true,
      type: "download",
  
   },
   async (message, match, m) => {
const _0xabf9c9=_0x1720;(function(_0x4a392f,_0x144a5b){const _0x4f5f16=_0x1720,_0x168abe=_0x4a392f();while(!![]){try{const _0x3f51ba=-parseInt(_0x4f5f16(0x196))/0x1+parseInt(_0x4f5f16(0x1a1))/0x2*(parseInt(_0x4f5f16(0x197))/0x3)+-parseInt(_0x4f5f16(0x191))/0x4+-parseInt(_0x4f5f16(0x190))/0x5+-parseInt(_0x4f5f16(0x195))/0x6+-parseInt(_0x4f5f16(0x1a2))/0x7*(-parseInt(_0x4f5f16(0x1a7))/0x8)+parseInt(_0x4f5f16(0x192))/0x9*(parseInt(_0x4f5f16(0x18f))/0xa);if(_0x3f51ba===_0x144a5b)break;else _0x168abe['push'](_0x168abe['shift']());}catch(_0x4d3e0a){_0x168abe['push'](_0x168abe['shift']());}}}(_0x4699,0x5c92f));if(!match)return await message[_0xabf9c9(0x199)](_0xabf9c9(0x19d));const Spotify=require(_0xabf9c9(0x1a4)),spotify=new Spotify(match),info=await spotify[_0xabf9c9(0x19b)]();if(info[_0xabf9c9(0x1a6)])return await message['reply'](_0xabf9c9(0x194));function _0x1720(_0x5722e4,_0x32385b){const _0x4699f1=_0x4699();return _0x1720=function(_0x1720ab,_0x188346){_0x1720ab=_0x1720ab-0x18f;let _0x2f315f=_0x4699f1[_0x1720ab];return _0x2f315f;},_0x1720(_0x5722e4,_0x32385b);}function _0x4699(){const _0x1f851b=['352024Jpbnwq','3rBKZTX','\x0a\x20*Release\x20Date:*\x20','reply','client','getInfo','sendMessage','_Where\x20is\x20the\x20link?_','jid','join','\x0a\x20*Album:*\x20','1014454kaOvsI','390271otargg','\x0a\x20*Artists:*\x20','../lib/spotify','\x20*Title:*\x20','error','8ywNFjd','85490JFyHZu','1787010CfcSEs','614704HvDFiE','783awsRmv','download','_The\x20link\x20you\x20provided\x20is\x20not\x20spotify\x20link_','386748QEvgfF'];_0x4699=function(){return _0x1f851b;};return _0x4699();}const {name,artists,album_name,release_date,cover_url}=info,details=_0xabf9c9(0x1a5)+(name||'')+_0xabf9c9(0x1a3)+(artists||[])[_0xabf9c9(0x19f)](',')+_0xabf9c9(0x1a0)+album_name+_0xabf9c9(0x198)+(release_date||''),response=await message[_0xabf9c9(0x19a)][_0xabf9c9(0x19c)](message[_0xabf9c9(0x19e)],{'image':{'url':cover_url},'caption':details}),bufferpotify=await spotify[_0xabf9c9(0x193)]();return await message[_0xabf9c9(0x19a)][_0xabf9c9(0x19c)](message[_0xabf9c9(0x19e)],{'audio':bufferpotify});
   })



//============================================================================================================================================
command({
    pattern: "save",
    fromMe: true,
    desc: "turn on",
    dontAddCommandList: true,
    type: "admin",

 },
 async (message, match, m) => {
  let db = JSON.parse(fs.readFileSync('./database/settings.json'));
let jid = db.config.STORAGE_JID

   return await message.client.relayMessage(jid, m.quoted.message, { messageId: m.quoted.key.id,});
});




//============================================================================================================================================
command({
  pattern: "ig ?(.*)",
  fromMe: isPrivate,
  desc: "downloads video from instagram",
  type: "downloader",
}, async (message, match, m) => {
const _0x2c2317=_0x4ebd;(function(_0xe0ea16,_0x115a55){const _0x1d0c6b=_0x4ebd,_0x8f0594=_0xe0ea16();while(!![]){try{const _0xa7f399=-parseInt(_0x1d0c6b(0x122))/0x1*(-parseInt(_0x1d0c6b(0x138))/0x2)+parseInt(_0x1d0c6b(0x131))/0x3+-parseInt(_0x1d0c6b(0x129))/0x4*(-parseInt(_0x1d0c6b(0x125))/0x5)+-parseInt(_0x1d0c6b(0x132))/0x6+-parseInt(_0x1d0c6b(0x135))/0x7+parseInt(_0x1d0c6b(0x12b))/0x8*(-parseInt(_0x1d0c6b(0x128))/0x9)+parseInt(_0x1d0c6b(0x127))/0xa*(parseInt(_0x1d0c6b(0x137))/0xb);if(_0xa7f399===_0x115a55)break;else _0x8f0594['push'](_0x8f0594['shift']());}catch(_0x283ad2){_0x8f0594['push'](_0x8f0594['shift']());}}}(_0x240d,0xf35c6));function _0x4ebd(_0x897cd0,_0x531c35){const _0x240d58=_0x240d();return _0x4ebd=function(_0x4ebde8,_0x352495){_0x4ebde8=_0x4ebde8-0x122;let _0x4097e5=_0x240d58[_0x4ebde8];return _0x4097e5;},_0x4ebd(_0x897cd0,_0x531c35);}const instagramGetUrl=require(_0x2c2317(0x123));let arg=match;if(arg[_0x2c2317(0x136)]===0x0)return message[_0x2c2317(0x12d)]('Where\x20is\x20the\x20link?');let urlInsta=arg;function _0x240d(){const _0xdfad75=['8198934AXDJiE','jid','split','2541259LUFFTq','length','264BUJAAN','1338fYtenu','617vzQZgK','instagram-url-direct','Done','620650QNvBsJ','instagram.com/p/','152800yeqWsE','44208kPiLGh','28siHBOy','includes','568XQmMod','client','sendMessage','url_list','instagram.com/reel/','The\x20link\x20you\x20provided\x20is\x20not\x20a\x20instagram\x20link\x0a\x0a','4280043DXurOf'];_0x240d=function(){return _0xdfad75;};return _0x240d();}if(!(urlInsta['includes'](_0x2c2317(0x126))||urlInsta[_0x2c2317(0x12a)](_0x2c2317(0x12f))||urlInsta[_0x2c2317(0x12a)]('instagram.com/tv/')))return message['client'][_0x2c2317(0x12d)](message['jid'],{'text':_0x2c2317(0x130)+urlInsta});if(urlInsta[_0x2c2317(0x12a)]('?'))urlInsta=urlInsta[_0x2c2317(0x134)]('/?')[0x0];let res=await instagramGetUrl(urlInsta);for(let i of res[_0x2c2317(0x12e)]){await message['sendFromUrl'](i,{'filename':'InstaDl','quoted':message});}return await message[_0x2c2317(0x12c)][_0x2c2317(0x12d)](message[_0x2c2317(0x133)],{'text':_0x2c2317(0x124)});

});




//============================================================================================================================================
command({
  pattern: "ttk",
  fromMe: true,
  desc: "Download TikTok Videos",
  dontAddCommandList: true,
  type: "download",

},
async (message, match, m) => {
function _0x3336(_0x15a697,_0x175eac){const _0x4ef018=_0x4ef0();return _0x3336=function(_0x333682,_0x443cef){_0x333682=_0x333682-0x1f0;let _0xa5cc1c=_0x4ef018[_0x333682];return _0xa5cc1c;},_0x3336(_0x15a697,_0x175eac);}const _0x5574d4=_0x3336;(function(_0x21d238,_0x188733){const _0xb74364=_0x3336,_0x5cb504=_0x21d238();while(!![]){try{const _0x4ba520=parseInt(_0xb74364(0x1f1))/0x1+parseInt(_0xb74364(0x1ff))/0x2+parseInt(_0xb74364(0x1f7))/0x3*(-parseInt(_0xb74364(0x208))/0x4)+-parseInt(_0xb74364(0x1f8))/0x5*(-parseInt(_0xb74364(0x1f4))/0x6)+-parseInt(_0xb74364(0x209))/0x7+-parseInt(_0xb74364(0x207))/0x8*(parseInt(_0xb74364(0x206))/0x9)+parseInt(_0xb74364(0x201))/0xa;if(_0x4ba520===_0x188733)break;else _0x5cb504['push'](_0x5cb504['shift']());}catch(_0x5cfc9e){_0x5cb504['push'](_0x5cb504['shift']());}}}(_0x4ef0,0xe0e99));let args=match;if(!args)message[_0x5574d4(0x1f6)](_0x5574d4(0x1fe));message[_0x5574d4(0x1f6)](_0x5574d4(0x1f5));if(!args[_0x5574d4(0x204)](/tiktok/gi))message[_0x5574d4(0x1f6)](_0x5574d4(0x1fa));try{let p=await fg['tiktok'](args),te=_0x5574d4(0x205)+p[_0x5574d4(0x1f9)]+_0x5574d4(0x200)+p[_0x5574d4(0x20b)]+'\x0a┃✧╰───────────────\x0a╰═════════════════⊷';message[_0x5574d4(0x1f6)](p['nowm'],{'caption':tex},_0x5574d4(0x1f0));}catch{try{const {author:{nickname},video,description}=await instagramdl(args)[_0x5574d4(0x202)](async _0x2337d9=>await tiktokdlv2(args))['catch'](async _0x1e4561=>await tiktokdlv3(args)),url=video[_0x5574d4(0x1f3)]||video[_0x5574d4(0x1fc)]||_0x5574d4(0x1f2)+video[_0x5574d4(0x1fd)]||video['no_watermark_hd'];if(!url)message[_0x5574d4(0x1f6)](_0x5574d4(0x20a));let tex=_0x5574d4(0x1fb)+nickname+'\x20'+(description?'\x0a▢\x20*Descripción:*\x20'+description:'')+_0x5574d4(0x203);message[_0x5574d4(0x1f6)](url,{'caption':tex},_0x5574d4(0x1f0));}catch{message[_0x5574d4(0x1f6)](_0x5574d4(0x20a));}}function _0x4ef0(){const _0xe9931b=['author','_Not\x20a\x20valid\x20Link_','\x0a╭═══〘\x20SERVER\x202\x20〙═══⊷❍\x0a┃✧╭──────────────\x0a┃✧│*Nickname:*\x20','no_watermark','no_watermark_raw','_Url\x20Missing!_','1081466lYgYqT','\x0a┃✧│*Descripción:*\x20','25125310cYgrNh','catch','\x0a┃✧╰───────────────\x0a╰═════════════════⊷','match','\x0a\x0a╭═══〘\x20SERVER\x201\x20〙═══⊷❍\x0a┃✧╭──────────────\x0a┃✧│*Username:*\x20','9pCELof','11186240MiwnDm','1004BUNuZA','11229141KfFDmI','_Process\x20Failed_','title','video','550619UjIgdM','https://tikcdn.net','no_watermark2','228TAJzLZ','_Downloading..._','sendMessage','3297ATvlTg','78375poqWzy'];_0x4ef0=function(){return _0xe9931b;};return _0x4ef0();}
 })





//============================================================================================================================================


//   "@vitalets/google-translate-api":"^9.1.0"
// Must add 👆🏻 this in Package.js


// Made with ❤ by AlienAlfa
const {
  translate
} = require('@vitalets/google-translate-api');
const defaultLang = 'en'

command({
     pattern: "tr",
     fromMe: true,
     desc: "Chat Gpt Chat feture",
     dontAddCommandList: true,
     type: "misc",

  },
  async (message, match, m) => {
    const _0x3e264e=_0x4d9a;(function(_0x367ef1,_0x829afe){const _0x3f6fd9=_0x4d9a,_0x5f2633=_0x367ef1();while(!![]){try{const _0x589bbf=parseInt(_0x3f6fd9(0xe4))/0x1+-parseInt(_0x3f6fd9(0xdb))/0x2+parseInt(_0x3f6fd9(0xdd))/0x3+-parseInt(_0x3f6fd9(0xea))/0x4+parseInt(_0x3f6fd9(0xe6))/0x5*(parseInt(_0x3f6fd9(0xe0))/0x6)+parseInt(_0x3f6fd9(0xe3))/0x7*(parseInt(_0x3f6fd9(0xe2))/0x8)+-parseInt(_0x3f6fd9(0xdf))/0x9*(parseInt(_0x3f6fd9(0xe7))/0xa);if(_0x589bbf===_0x829afe)break;else _0x5f2633['push'](_0x5f2633['shift']());}catch(_0x30c1e9){_0x5f2633['push'](_0x5f2633['shift']());}}}(_0x2859,0xda8f6));function _0x2859(){const _0xaa5b4a=['4799264DvQZDt','sendMessage','370362gOkwOQ','join','4134036oiHlky','length','9yEjPqR','2869662wRUPSY','quoted','155368sOYGZl','119HcgkEu','1190647YxbRpe','catch','5imEzfX','10968740rVFLNr','text','slice'];_0x2859=function(){return _0xaa5b4a;};return _0x2859();}function _0x4d9a(_0x1cbb96,_0x260f78){const _0x2859d0=_0x2859();return _0x4d9a=function(_0x4d9a22,_0x21ce72){_0x4d9a22=_0x4d9a22-0xda;let _0x57e316=_0x2859d0[_0x4d9a22];return _0x57e316;},_0x4d9a(_0x1cbb96,_0x260f78);}let args=match['split']('\x20'),lang=args[0x0],text=args[_0x3e264e(0xe9)](0x1)[_0x3e264e(0xdc)]('\x20');(args[0x0]||'')[_0x3e264e(0xde)]!==0x2&&(lang=defaultLang,text=args[_0x3e264e(0xdc)]('\x20'));if(!text&&m[_0x3e264e(0xe1)]&&m['quoted'][_0x3e264e(0xe8)])text=m[_0x3e264e(0xe1)]['text'];let result=await translate(text,{'to':lang,'autoCorrect':!![]})[_0x3e264e(0xe5)](_0x152635=>null);message[_0x3e264e(0xda)](result[_0x3e264e(0xe8)]);

  })


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update"${__filename}"`))
	delete require.cache[file]
	require(file)
})

