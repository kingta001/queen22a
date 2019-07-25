const Discord = require("discord.js");
const client = new Discord.Client();
 
 
 
 
 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`Queen , | ♦ Free Nitro •`,'https://www.twitch.tv/zya2d_')
    client.user.setStatus('ldle');
});


	


const adminprefix = "-";
const devs = ['596778797551058964','600839628739706910'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى ${argresult}**`)
}
});

client.login(process.env.BOT_TOKEN);
