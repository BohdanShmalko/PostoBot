const start = (bot, id, msg) => {
    bot.sendMessage(id, `
Hello ${msg.chat.first_name}
My name is Posto, I am a bot that help you to send simple request to some server

If you newer work with me simple sent /help command and read message
I have some commands :

/start : start message for new user with new user (it is this message)
/help : all commands
/newbasehost <host name> : create new base host
/sethost : set host of the list
/chousehost <host> : chouse some of your hosts
/post <url> <body> : add new work
/get <url> : get all works
/put <url> <body> : rename work
/delete <url> : delete work with all your deadlines
`)
}

module.exports = start