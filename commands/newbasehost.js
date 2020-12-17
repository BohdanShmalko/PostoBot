const {config, readJSON, writeJSON} = require('../files')

const newbasehost = async (bot, id, parametr) => {
    const {hostsPath} = config
    const command = parametr.split(' '),
          hostname = command[0]

    if (command.length !== 1) {
        bot.sendMessage(id, `You send bad command.
Example : /newbasehost https://www.google.com`)
    return
}

let {active, allHosts} = await readJSON(hostsPath).catch(err => bot.sendMessage(id, `problems with get host names`))
let isFind = allHosts.find(el => el == hostname)
    if(!isFind) {
        active = hostname
        allHosts.push(hostname)
        const allGood = await writeJSON(hostsPath, {active, allHosts}).catch(err => bot.sendMessage(id, `problems with saving host name`))
        if(allGood) bot.sendMessage(id, `creating new base host is successful`)
    }else {
        bot.sendMessage(id, `You have already added this host.
Use command /chousehost ${hostname} for chouse this host
or /deletehost ${hostname} for delete this host`)}
}

module.exports = newbasehost