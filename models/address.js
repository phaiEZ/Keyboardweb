const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {

	email : String,
	name: String,
    phone : String,
	province : String,
    district : String,
    postalcode : String,
    info : String,
	createdAt: {
		type: Date,
		default: Date.now
	}
}),
Address = mongoose.model('address', userSchema);
module.exports = Address;
