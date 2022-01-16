const mongoose = require("mongoose");

const LootSchema = new mongoose.Schema({
  server: {
    type: String,
    required: true
  },
  user: {
      type: String,
      required: true
  },
  value: {
    type: Number,
    required: true
  },
});

const Loot = mongoose.model("Loot", LootSchema);

module.exports = Loot;