const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: {
        type: String, // Suponiendo que el usuario está representado por su nombre
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
