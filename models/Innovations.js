var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Innov = new Schema({
  name: {
    type: String
  },
  author:{
    type:String
  },
  imageURL: {
    type: String
  },
  description: {
    type: String
  },
  contact:{
    type: String
  }
},{
    collection: 'Innovations'
});

module.exports = mongoose.model('Innov', Innov);