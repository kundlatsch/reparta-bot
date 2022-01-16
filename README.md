# REPARTA BOT

In Albion Online, when you kill a player in a full-loot map, the equipment the killed player is using will get damaged and drop. When you are ganking (looking for players to kill) with a party, it is necessary to discount the price of repairing the damaged items before splitting the loot. This bot automates this process in the following way:

1. All the equipment obtained value is summed
2. All the repair cost is summed
3. The total repair cost is subtracted from the total loot value
4. This result is split by all members of the party
5. Each user get he's part of the loot plus the value spent on repair

## Commands

* `!r loot` - Clean the database to start a new loot splitting. The database is shared with the server, so if another party is using the bot at the same time as yours, you will have issues. Remember to always start a new splitting with this command before anyone adds a value entry.

* `!r add <int>` - Add a new value to the pool. This value can be positive (a loot) or negative (a repair cost). The value must be an integer (the backend will try to convert it and give an error if it is not possible). The bot will react with `:thumbsup:` if the operation has succeeded.

* `r! calc` - Calculates the final loot for the party. This command does not clean the database, so you can add more values and calculate the final loot again.

## Dev

If you want to run the bot locally or host elsewhere, you need to configure the following environment variables:

```
BOT_TOKEN = your discord bot token
DB_USER = atlas user
DB_PASSWORD = atlas password
```

You can change your DB URL connection in the `database/mongoose.js` file if you want to use another MongoDB cloud.