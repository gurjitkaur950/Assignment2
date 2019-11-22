const mongoose = require( 'mongoose' );
const detailsSchema = new mongoose.Schema({
artisr: {
type: String
},
label: String,
});

const musciSchema = new mongoose.Schema({
   name: {  type: String,   required: true},
   genre: String,
   rating: {  type: Number,  'default': 0,min: 0,max: 5},
   released: { type: Number},
   lyrics:{ type: String},
details: [detailsSchema]
});

mongoose.model('Music', musciSchema);