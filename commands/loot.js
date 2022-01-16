const lootModel = require("../models/loot");

module.exports = {
    name: "loot",
    description: "Reset database to start new loot distribution",
    execute(message, args, client) {
        const server = message.guild.id;
        lootModel.deleteMany({server}).then(() => {
            message.channel.send("Loot data was deleted, a new loot distribution can be started now with `!r add` command");
        }).catch(err => {
            console.log(err)
            message.channel.send("Something went wrong while deleting loot from database, please try again");
        });
    }
}
