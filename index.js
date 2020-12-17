const TelegramBot = require('node-telegram-bot-api'),
      {config, readJSON, writeJSON} = require('./files'),
      start = require('./commands/start'),
      chousehost = require('./commands/chousehost'),
      help = require('./commands/help'),
      newbasehost = require('./commands/newbasehost'),
      sethost = require('./commands/sethost'),
      deletehost = require('./commands/deletehost')
const { put } = require('request')
      get  = require('request')
      post = require('./commands/post'),
      get = require('./commands/get'),
      putHost = require('./commands/put'),
      delet = require('./commands/delete')

const {token, commands, hostsPath} = config

const bot = new TelegramBot(token, {polling : true})

//https://localhost:3001
// bot.on('message', msg => {
//     const {id} = msg.chat
//     bot.sendMessage(id, `test`)
// })

bot.onText(/\/start/, msg => {
    const {id} = msg.chat
    start(bot, id, msg)
})

bot.onText(/\/help/, msg => {
    const {id} = msg.chat
    help(bot, id)
})

bot.onText(/\/newbasehost (.+)/, (msg, [allCommand, parametr]) => {
    const {id} = msg.chat
    newbasehost(bot, id, parametr)
})

bot.onText(/\/sethost/, msg => {
    const {id} = msg.chat
    sethost(bot, id)
    
})

bot.onText(/\/chousehost (.+)/, (msg, [allCommand, parametr]) => {
    const {id} = msg.chat
    chousehost(bot, id, parametr)
})

bot.onText(/\/post (.+)/, (msg, [allCommand, parametr]) => {
    const {id} = msg.chat
    post(bot, id, parametr)
})

bot.onText(/\/get (.+)/, (msg, [allCommand, parametr]) => {
    const {id} = msg.chat
    get(bot, id, parametr)
})

bot.onText(/\/put (.+)/, (msg, [allCommand, parametr]) => {
    const {id} = msg.chat
    putHost(bot, id, parametr)
})

bot.onText(/\/delete (.+)/, (msg, [allCommand, parametr]) => {
    const {id} = msg.chat
    delet(bot, id, parametr)
})

bot.onText(/\/deletehost (.+)/, (msg, [allCommand, parametr]) => {
    const {id} = msg.chat

    deletehost(bot, id, parametr)
})

bot.on('callback_query', query => {
    const {id} = query.message.chat
    bot.answerCallbackQuery(query.id, `You chouse ${query.data}`)
    chousehost(bot, id, query.data)
})

