//═══════════════════════════════════════════════════════//
//
//                              💝❄D͎A͎R͎K͎  I̟S̟H̟U̟ ❄️💝*
//
//                                         Made By  Ishan Sandeepa
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['+94714327921']
global.premium = ['+94714327921']
global.ownernomer = '+94714327921'
global.ownername = 'SANDUN THILINA'
global.botname = 'I Am 💝❄KING SADU❄️💝'
global.footer = '©𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺:- SANDUN THILINA.'
global.ig = 'SANDUN THILINA'
global.region = 'Sri Lanka'
global.sc = 'https://m.facebook.com/GamingNethuwa/'
global.myweb = 'https://youtube.com/c/KingSadu'
global.packname = '𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺:- SANDUN THILINA'
global.author = '𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺:- KING SADU'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'උබට බෑ බං ඇඩ්මින්ට විතරයි පුලුවන්!',
    botAdmin: 'මුලින්ම ඇඩ්මින් දීලා ඉන්න!',
    owner: 'මට විතරයි මේක කරන්න පුලුවන්!',
    group: 'Groups වල විතරයි පුලුවන්!',
    private: 'Private Chat වල විතරයි පුලුවන්!',
    bot: 'මෙම විශේෂාංගය Bot සඳහා පමණි',
    wait: 'පොඩ්ඩක් ඉන්න මගේ මැණික Wait ⏳ ...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./Dark_Ishu_Media/ishu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
