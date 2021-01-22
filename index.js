const { ShardingManager } = require('discord.js');

const config = require('./config');
const token = config.token;

const manager = new ShardingManager("./bot.js", {
    token,
    // Normally, you should change totalShards to "auto"
    totalShards: 10
});

manager.on("shardCreate", shard => console.log(`Shard ${shard.id + 1} has been connected.`))


manager.spawn();
