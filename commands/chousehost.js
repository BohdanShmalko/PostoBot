const {config, readJSON, writeJSON} = require('../files')

const chousehost = async (bot, id, parametr) => {
    const {hostsPath} = config
    const command = parametr.split(' '),
          hostname = command[0]

    if (command.length !== 1) {
        bot.sendMessage(id, `You send bad command.
Example : /chousehost https://www.google.com`)
    return
}

    let {active, allHosts} = await readJSON(hostsPath).catch(err => bot.sendMessage(id, `problems with get host names`))
    let isFind = allHosts.find(el => el == hostname)

    if(isFind){
        active = hostname
        const allGood = await writeJSON(hostsPath, {active, allHosts}).catch(err => bot.sendMessage(id, `problems with saving hosts`))
        if(allGood) bot.sendMessage(id, `chousing base host is successful`)
    }else bot.sendMessage(id, `The host ${hostname} is not defined.
You can use /newbasehost ${hostname} for creating new base host`)
}

module.exports = chousehost