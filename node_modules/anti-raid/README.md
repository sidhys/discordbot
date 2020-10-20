# Anti-raid

new update info :

Now api support discord.js v11 or v12
new method
Fully customisable your self

<a href="https://www.npmjs.com/package/anti-raid" ><img src="https://img.shields.io/npm/v/anti-raid.svg?maxAge=3600" ></a>

<a href="https://www.npmjs.com/package/anti-raid" ><img src="https://img.shields.io/npm/dt/anti-raid.svg?maxAge=3600" ></a>

how to use api

Besic ex.
```

const Discord = require("discord.js");
const bot = new Discord.Client();
const Antiraid = require("anti-raid");
const setup = Antiraid.checkspam({
clientBot: bot 
});
bot.login("<your bot token>");

```

[join support server](https://discord.gg/KmngEup)

Fully customisable Ex.

```
const Discord = require("discord.js");
const bot = new Discord.Client();
const Antiraid = require("anti-raid");
const setup = Antiraid.checkspam({ 
clientBot: bot,
bot: true, // check bot spam true or false 
warn: 3, //warn
kick: 4, //4 warn = kick
ban: 6, //6 warn = ban
interval: 3200, //check spam await
maxwarn: 7, //max warn count
maxkick: 6, //max kick count
maxban: 8, //max ban count
permission: ["ADMINISTRATOR"], //role parmission
verbose: false,
ignoreduser: ["596521432507219980"], //not check spam this user id
});
bot.login("<your bot token>");

```
