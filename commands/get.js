const request = require('request'),
      {config, readJSON} = require('../files')

const get = async (bot, id, parametr) => { 
    const command = parametr.split(' '),
          url = command[0]

    if (command.length !== 1) {
        bot.sendMessage(id, `You send bad command.
Example : /get /someurl`)
    return
}

    const {hostsPath} = config
    let {active} = await readJSON(hostsPath).catch(err => bot.sendMessage(id, `problems with get host names`))
    
    request(`${active}${url}`, {json: true, method: 'GET'}, (err, res, body) => {
        if (err) bot.sendMessage(id, `${err}`)
        else bot.sendMessage(id, JSON.stringify(body))
    });
}

module.exports = get