const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {

	email : String,
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
Cart = mongoose.model('Cart', userSchema);
module.exports = Cart;
