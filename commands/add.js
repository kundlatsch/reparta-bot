const lootModel = require("../models/loot");

module.exports = {
    name: "add",
    description: "Add a loot (positive) or a repair (negative) value",
    execute(message, args, client) {
        const server = message.guild.id;
        const user = message.author.id;
        const value = parseInt(args[0], 10);

        if (!Number.isInteger(value)) {
            message.channel.send("Invalid argument, please provide a valid integer (positive or negative)");
            return
        }

        const loot = new lootModel({
            server,
            user,
            value
        });
        
        loot.save()
            .then(() => {
                message.react("👍")
            })
            .catch((err) => {
                message.channel.send("An error has ocurred while writing in the database")
            });
    }
}