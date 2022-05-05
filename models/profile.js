const mongoose = require('mongoose');
const Schema = mongoose.Schema;

profileSchema = new Schema( {
	
	email: String,
	name: String,
    textProfile: String,
    img: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
}),
Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

module.exports.getAll = function(data){
	Profile.find(data)
}