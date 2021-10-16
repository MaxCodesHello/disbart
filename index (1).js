const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");

  client.user.setActivity("use !help | servers: " + client.guilds.cache.size)


  
});

client.on("message", (message) => {
   if (message.content === '!ping') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
  if (message.content.startsWith("!help")) {
    message.channel.send("Commands are: !ping, !help,  !say text, !greeting, !invite, !meme, !memberinfo, !serverinfo, !rob text, !credits, !dc text, !imp text. The bot is hosted using insert here and on discord.js.... \n")
  }
  if(message.content.startsWith("!say")) {
    message.delete()
		if (message.content.includes("@")) {
			const noping = new Discord.MessageEmbed()
			.setTitle("Nope")
			.setDescription("No pings allowed")
			.setFooter("no")
			.setColor("RED")
						message.channel.send(noping) 
		} else {
    message.channel.send(message.content.slice(4))
		}
  }
  if (message.content.startsWith("!greeting")) {
    message.channel.send(`I'm disbart who the heck are you? Wait never mind, you are @${message.author.tag}. Okay well hi there! I have got a ton of features so use command !help to test them all!\n`);
  }
  if (message.content.startsWith("!invite")) {
    message.channel.send("Invite link: insert here also here is the link to support server insert here \n")
    ;
  }
   
  if (message.content.startsWith("!meme")) {
    message.channel.send("Here's meme: https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/86305577.jpg\nThis isn\'t being updated\n")
  }
  else if (message.content === `!serverinfo`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n`);
}
else if (message.content === `!memberinfo`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}\n`);
}
if(message.content.startsWith("!rob")) {
			if (message.content.includes("@")) {
			const noping = new Discord.MessageEmbed()
			.setTitle("You tried. And failed")
			.setDescription("No pings allowed")
			.setFooter("Patch made by Deveroonie and CharityLexus")
			.setColor("RED")
			} else {
						message.channel.send(noping) 
  message.channel.send(" Help there is a robber in my house it's " + message.content.slice(4))
			}
}
if (message.content.startsWith("!credits")) {
    message.channel.send("Bot credits: The developer is CharityLexus#4362 but anondev, Deveroonie and MR PRinCe also helped, for more info check support server by doing !invite")
  }
  if(message.content.startsWith("!dc")) {
				if (message.content.includes("@")) {
			const noping = new Discord.MessageEmbed()
			.setTitle("Nope")
			.setDescription("No pings allowed")
			.setFooter("hahaha you tried")
			.setColor("RED")
						message.channel.send(noping) 
				} else {
    message.channel.send(" Bruh i don't care. I honestly don't care about " + message.content.slice(4))
				}
   // message.channel.send(message.content.slice(4))
  }
    if(message.content.startsWith("!imp")) {
					if (message.content.includes("@")) {
			const noping = new Discord.MessageEmbed()
			.setTitle("Nope")
			.setDescription("No pings allowed")
			.setFooter("get trolled")
			.setColor("RED")
						message.channel.send(noping) 
					} else {
    //message.channel.send(message.content.slice(4))
    message.channel.send(message.content.slice(4)+" was the impostor.")
					}
  }
  
});

client.login(process.env.TOKEN);


 var http = require('http');

//create a server object, if you're not using repl.it you can remove this

http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

client.on("message", msg => {
	if (msg.content === "!help") {
	var interval = setInterval (function () {
            msg.channel.send("random here")
            .catch(console.error); // add error handling here
        }, 
						9999999); 
	}
})