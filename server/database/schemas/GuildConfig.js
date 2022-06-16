const mongoose = require('mongoose');

const GuildConfigSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true,
        unique: true,
    },
    prefix: {
        type: String,
        required: true,
        default: '!',
    },
    defaultRole: {
        type: String,
        required: true,
    }
})

const GuildConfig = mongoose.model("GuildConfig", GuildConfigSchema);

module.exports = GuildConfig;