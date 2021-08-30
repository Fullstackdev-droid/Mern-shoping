const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let product = new Schema({
	productName:{
		type:String
	},
	productPrice:{
		type:Number
	},
    productDescription:{
		type:String
	},
	status:{
		type:String,default:1
	},
	created_date:{
		type:Date,default: Date.now
	},
});

module.exports = mongoose.model('product',product,'product');