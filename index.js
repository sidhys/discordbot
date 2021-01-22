const { ShardingManager } = require('discord.js');
const config = require('./config');
const token = config.token;

const manager = new ShardingManager("./bot.js", {
    token,
    totalShards: "auto"
});

manager.on("shardCreate", shard => {
    console.log(`[ShardingManager] Shard ${shard.id + 1} has been connected.`)
});

manager.spawn();
