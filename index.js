const Discord = require("discord.js");
const client = new Discord.Client();
const footer = "Air Europa Verify | Made by vedu1012";

const prefix = "!";

client.on("ready", () => {
    console.log("I'm alive!");
    client.user.setActivity(`Verifying user's.`)
})

client.on("guildMemberAdd", member => {
    var Unverified = member.guild.roles.find('name', 'Unverified')
    member.addRole(Unverified);
})

client.on('message', function(message) {
    if (message.channel.name === "verify") {
      if (message.content === "!verify") {
          const verifyRole = message.guild.roles.find('name', 'Passengers');
          var role = message.guild.roles('name', 'Unverified');
          message.member.addRole(verifyRole);
          message.member.removeRole(role);
          message.author.send({ embed: {
              colour: 0xffffff,
              title: "Air Europa - Verification",
              description: ":white_check_mark You have verified yourself.",
              footer: {
                  text: "Air Europa Verify | Made by vedu1012"
              },
              timestap: new Date
          }})
          message.delete(100)
      } else message.delete(100)
    };
});

client.on('message', (message) => {
    let cont = message.content.slice(prefix.length).split(" ")
    let args = cont.slice(1);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content.toLowerCase().startsWith(prefix + "fakejoin")) {

        client.emit("guildMemberAdd", message.member);
    }

    if (message.content.toLowerCase(). startsWith(prefix + "verify")) {
        if (message.channel.name === "verify") {
            return;
        }
        else {
            message.delete()
            const embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setTitle("Air Europa - Verification")
            .setDescription("You cannot be verified again.")
            .setFooter(footer)
            return message.author.send({ embed: embed});
        }
    }
})

client.login(process.env.tokenb).catch(console.error);
