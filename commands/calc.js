const lootModel = require("../models/loot");

module.exports = {
    name: "calc",
    description: "Calculate the final value of the loot for each player",
    execute(message, args, client) {
        const server = message.guild.id;
        lootModel.find({server}).then((loots) => {
            let total_value = 0;
            let total_repair = 0;
            let repair_per_user = {}
            let number_of_users = 0;

            loots.map(loot => {
                const user = loot.user;
                if (!repair_per_user[user]) {
                    repair_per_user[user] = 0;
                    number_of_users += 1;
                }

                if (loot.value > 0) {
                    total_value += loot.value;
                }
                else {
                    total_repair += loot.value;
                    repair_per_user[user] += loot.value;
                }
            });

            if (number_of_users === 0) {
                message.channel.send("No loot was provided");
                return;
            }

            const divided_loot = Math.floor((total_value - total_repair) / number_of_users);
            
            let response = ""
            for (const user in repair_per_user) {
                const user_loot = divided_loot + repair_per_user[user];
                response += `<@${user}> - ${user_loot}\n`
            }

            message.channel.send(response);
        });
    }
}