const {config, readJSON} = require('../files')

const sethost = async (bot, id) => {
    const {hostsPath} = config
    let {allHosts} = await readJSON(hostsPath).catch(err => bot.sendMessage(id, `problems with get host names`))
    let mapped = allHosts.map(el => ([{
        text : el,
        callback_data : el
    }]))

    bot.sendMessage(id, `Chousehost one of your base hosts`, {
        reply_markup : {
            inline_keyboard : mapped
        }
    })
}

module.exports = sethost