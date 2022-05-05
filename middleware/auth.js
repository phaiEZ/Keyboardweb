const jwt = require('jsonwebtoken');
const { model } = require('mongoose');

const config = process.env;

const verifyToken = (req, res , next) =>{
    const token = req.body.token || req.query.token || req.headers['x-acess-token'];

    if(!token){
        return res.send({ loggedIn: false,"Success": "A token is required for auth" });
    }

    try{
        const decoded = jwt.verify(token,config.TOKEN_KEY);
        req.user = decoded;
    }catch(err){
        return res.send({ loggedIn: false,"Success": "Invalid Token" });
    }

    return next();
}
module.exports = verifyToken;