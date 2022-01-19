const Dicord = require("discord.js")

require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Dicord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Successfully saved changes`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Ping!"){
        message.reply("Pong!")
    }
})

const welcomeChannelId = "932416718624653352"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN) 