const {config, readJSON, writeJSON} = require('../files')

const deletehost = async (bot, id, parametr) => {
    const {hostsPath} = config
    const command = parametr.split(' '),
          hostname = command[0]

    if (command.length !== 1) {
        bot.sendMessage(id, `You send bad command.
Example : /deletehost https://www.google.com`)
    return
}

let {active, allHosts} = await readJSON(hostsPath).catch(err => bot.sendMessage(id, `problems with get host names`))
let element
let isFind = allHosts.find((el, i) => {
    if(el == hostname) {
        element = i
        return true
    }else return false
})
    if(isFind) {
        if (active == hostname) active = ""
        allHosts.splice(element, 1)
        const allGood = await writeJSON(hostsPath, {active, allHosts}).catch(err => bot.sendMessage(id, `Problems with saving host name`))
        if(allGood) bot.sendMessage(id, `Deleting base host is successful`)
    }else {
        bot.sendMessage(id, `The host ${hostname} is not defined.
You can use /newbasehost ${hostname} for creating new base host`)}
}

module.exports = deletehost