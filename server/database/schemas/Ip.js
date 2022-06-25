const mongoose = require("mongoose");

const IpSchema = new mongoose.Schema({
    ips: {
        type: Array,
        require: true,
    },

});

const Ip = mongoose.model("Ip", IpSchema);

module.exports = Ip;