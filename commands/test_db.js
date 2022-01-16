const lootModel = require("../models/loot");

module.exports = {
    name: "test_db",
    execute(message, args, client) {
        const server = message.guild.id;
        lootModel.find({}).then((loots) => {
            console.log(loots);

            let total_value = 0;
            let total_repair = 0;
            let repair_per_user = {}

            loots.map(loot => {
                if (loot.value > 0) {
                    total_value += loot.value;
                }
                else {
                    total_repair += loot.value;
                    const user = loot.user;
                    if (repair_per_user[user])
                        repair_per_user[user] += loot.value;
                    else
                        repair_per_user[user] = loot.value;
                }
            });

            console.log(total_value, total_repair, repair_per_user);

            message.channel.send("ok");
        });
    }
}