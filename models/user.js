const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {
	
	name: String,
	email: String,
	username: String,
	phoneNumber: String,
	password: String,
	token: {type : String},
	createdAt: {
		type: Date,
		default: Date.now
	}
}),
User = mongoose.model('User', userSchema);

module.exports = User;

module.exports.getAll = function(data){
	User.find(data)
}