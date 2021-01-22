const { ShardingManager } = require('discord.js');

const config = require('./config');
const token = config.token;

const manager = new ShardingManager("./bot.js", {
    token,
    totalShards: 10
});

manager.on("shardCreate", shard => console.log(`Shard ${shard.id} has been connected.`))


manager.spawn();
