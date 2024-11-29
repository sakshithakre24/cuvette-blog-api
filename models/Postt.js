const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required : true
    },
    discription: {
        type:String,
        required : true
    },

  });

  const Postt = mongoose.model('Postt', postSchema);

  module.exports = Postt;