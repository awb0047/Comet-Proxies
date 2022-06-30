const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    orders: {
        type: Array,
        require: true,
    },

});

const Orders = mongoose.model("Orders", OrdersSchema);

module.exports = Orders;