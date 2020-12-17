const help = (bot, id) => {
    bot.sendMessage(id, `
First of all, you must to create new base url with command /newbasehost <host name>
For example: /newbasehost https://www.google.com

Next, you can chouse your base url with command /sethost or /chousehost <base host>

After that, you can send some request to server with commands 
/post <url> <body> 
/get <url>
/put <url> <body>
/delete <url>

If you want to delete your base host? you must write command /deletehost <host>

All commands :

/start : start message for new user with new user
/help : all commands (it is this message)
/newbasehost <host> : create new base host
/sethost : set host of the list
/chousehost <host> : chouse some of your hosts
/deletehost <host> : delete your base host
/post <url> <body> : add new work
/get <url> : get all works
/put <url> <body> : rename work
/delete <url> : delete work with all your deadlines
`)
}

module.exports = help