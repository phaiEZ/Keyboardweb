const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {

	img: String,
	name: String,
    serial : String,
	info : String,
    stock : Number,
    price : Number,
	createdAt: {
		type: Date,
		default: Date.now
	}
}),
Products = mongoose.model('Products', userSchema);
module.exports = Products;
module.exports.getAll = function(data){
    Products.find(data)
}