//Referring to config
const botconfig = require("./botconfig.json");
const Discord = require('Discord.js');

//Disables @everyone
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () =>{
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Floatlands",{type: "PLAYING"});
});

bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;
//making sure everything is split up
let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray [0];
let args = messageArray.slice(1)

listenChannel = message.channel.id
if(listenChannel == 424229888934019083 || listenChannel == 424266068337491969){
    //run commands
    if(cmd === `${prefix}bug`){
        message.delete();
    
        let reason = args.join(" ")
        
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Bug Report")
        .setColor ("#800000")
        .addField("Reported By", `${message.author} with ID ${message.author.id}`)
        .addField("Reason", reason);
        
        let reportschannel = message.guild.channels.find(`name`, "bugs");
        if(!reportschannel) return message.channel.send("No bugs channel was found!")
        
        
         reportschannel.send(reportEmbed);
         message.reply(`Your bug has been sent!`)
         .then(msg =>msg.delete(60000))

        return;
        }  
        
        //Places the text for support
        if(cmd ===`${prefix}place`){
            message.delete();
            if(message.member.roles.some(r=>["DEVELOPER"].includes(r.name)) ) {
                // has one of the roles
                message.channel.send("***Support*** \n *Choose a number depending on which you require assistance with!* \n `1.`How do I become a tester? \n `2.`What engine do you use? \n `3.`When will the game release? \n")
              } else {
                   // has none of the roles
                  message.channel.send("You need Developer role to do this.")
              }
        }
        
        const banned = ["1.", "2.","3.","1","2","3"] 
        if (message.content.includes(banned)) 
        message.delete();
        if(message.content.toLowerCase() === "1.")
          message.reply("When we are looking for testers there will be an announcement across all our social media.")
          .then(msg =>msg.delete(60000))
          else if(message.content.toLowerCase() === "2.")
          message.reply("The game is developed in Unity, you can see more info on this in the #faq section.")
          .then(msg =>msg.delete(60000))
          else if(message.content.toLowerCase() === "3.")
          message.reply("There is no scheduled release date at this time. Early access is planned for 2018.")
          .then(msg =>msg.delete(60000))
          else if(message.content.toLowerCase() === "1")
          message.reply("When we are looking for testers there will be an announcement across all our social media.")
          .then(msg =>msg.delete(60000))
          else if(message.content.toLowerCase() === "2")
          message.reply("The game is developed in Unity, you can see more info on this in the #faq section.")
          .then(msg =>msg.delete(60000))
          else if (message.content.toLowerCase() === "3")
          message.reply("There is no scheduled release date at this time. Early access is planned for 2018.")
          .then(msg =>msg.delete(60000))

          
        
        if(cmd === `${prefix}ping`){
            return message.channel.send("pong");
        }
        
  };
}
)
bot.login(botconfig.token)