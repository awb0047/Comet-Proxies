const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  discordId: {
    type: String,
    required: true,
    unique: true
  },
  discordTag: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    require: true
  },
  sid: {
    type: String,
    required: true,
    unique: true
  },
  proxyUser: {
    type: String,
    required: true,
    unique: true
  },
  proxyPass: {
    type: String,
    required: true,
    unique: true
  },
  guilds: {
    type: Array,
    require: true,
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;