const request = require('request'),
      {config, readJSON} = require('../files')

const put = async (bot, id, parametr) => {
    let command = parametr.split(' '),
    [url, body] = command

if (command.length !== 2) {
  bot.sendMessage(id, `You send bad command.
Example : /put /someurl {somebody}`)
return
}

try{
body = JSON.parse(body)
}catch(e){
bot.sendMessage(id, `Bad body. Example : {"name":"Peta"}`)
return
}

const {hostsPath} = config
let {active} = await readJSON(hostsPath).catch(err => bot.sendMessage(id, `problems with get host names`))

request(`${active}${url}`, {json: true, method: 'PUT', body}, (err, res, body) => {
  if (err) bot.sendMessage(id, `${err}`)
  else bot.sendMessage(id, JSON.stringify(body))
});  
}

module.exports = put