const Dicord = require("discord.js")

require("dotenv").config()

const client = new Dicord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
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

client.login(process.env.TOKEN)