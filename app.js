require('dotenv').config();
require('./config/database').connect();

const User = require('./models/user');
const Profile = require('./models/profile');
const Products = require('./models/products');
const Cart = require('./models/cart');
const Address = require('./models/address');

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.use(express.json());

app.post('/register', async (req, res) => {
	try{
		const {name, email, username, phoneNumber, password, passwordConf} = req.body;

        //check not space
		if(!(name && email && username && phoneNumber && password && passwordConf)){
			
			res.status(400).send("All input is requried");
		}
        else{
            
            const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            const phoneCheck =  /^[a-zA-Z0-9]{10}$/;
            const passowrdCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            

            //check email format
            if (!email.match(emailCheck)) {
                res.status(400).send("E-mail is not standard format.");
            }
            else if(!phoneNumber.match(phoneCheck)){
                res.status(400).send("Phone Number is not standard format.");
            }
            //check password
            else if(!password.match(passowrdCheck)){
                res.status(400).send("Password is not standard format,1 least upper,lower,number and  least 8 from the mentioned characters");
            }
            else{
                //check oldUser
                const oldUesr = await User.findOne({email});

                if(oldUesr){
                    
                    return res.status(409).send("User alreadty exist. Please login");
                }

                //create new user
                const user = await User.create({
                    name,
                    email,
                    username, 
                    phoneNumber, 
                    password,
                })

                //create profile user
                const profile = await Profile.create({
                    email: email,
                    textProfile: "",
                    img: "",
                })

                res.status(201).json(user);
                console.log("Success");
            }
        }
    } catch (err){
		console.log(err)
    }

        

		// const token = jwt.sign(
		// 	{user_id : user._id , email},
		// 	process.env.TOKEN_KEY,
		// 	{
		// 		expiresIn : "2h"
		// 	}
		// )

		// user.token = token;	
});

app.post("/login", async (req,res) =>{
    try{
        const {email , password} = req.body;

        if(!(email && password)){
            res.status(400).send("All input is requried");
        }

        const user = await User.findOne({email});
		if(user && password == user.password){
			const token = jwt.sign(
                {user_id : user._id , email},
                process.env.TOKEN_KEY,
                {
                    expiresIn : "2h"
                }
            )
            user.token = token;
            res.status(200).json(user);
            console.log("Success");
		}
        else{
            res.status(400).send("Invalid Credentials");
        }
        
    } catch(err){
        console.log(err);
    }
})

// app.post("/profile", upload.single("file"), async (req, res) => {
//     if (req.file === undefined) return res.send("you must select a file.");
//     const imgUrl = `http://localhost:8080/file/${req.file.filename}`;
//     return res.send(imgUrl);
// });
app.post("/profile", async (req,res)=>{
    try {
        const email = req.body.email;
        const name = req.body.name;
        const textProfile = req.body.textProfile;
        const img = req.body.img.image;

        // console.log(img);
        
        //find profile from db by email and edit
        const profile = await Profile.findOne({email});

        //had Cart
        if (profile){

            const editProfile = await Profile.findOneAndUpdate({
                email,
            },
            {
                textProfile: textProfile,
                img: img
            })
            console.log("editProfile");
            res.status(200).json(editProfile);
        }
        //not had Profile,Create New
        else{
            const newProfile = await Profile.create({
                email,
                name,
                textProfile,
                img
            }) 
            console.log("newProfile");
            res.status(200).json(newProfile);
        }

    } catch (err) {
        console.log(err);
    }

})

app.post("/userProfile", (req,res) =>{
    const email = req.body.email;
    console.log(email);
    Profile.findOne({email : email},(err,data) => {
        if(err) throw err
        console.log("userProfile")
        res.send(data);
    });
})

app.post("/addshop", async (req,res) =>{

    try{
        const {img,name,serial,info,stock,price,} = req.body;
        const products = await Products.create({
            img,
	        name,
            serial,
	        info,
            stock,
            price,
        })
        console.log("addShop");
        res.status(200).json(products);
    }catch(err){
        console.log(err);
    }
})

app.get("/shop", (req,res) =>{
    Products.getAll((err,data) => {
        if(err) throw err
        console.log("getShop")
        res.send(data);
    });
})

app.post("/addCart", async (req,res) =>{
    try{
        const _id = req.body._id;
        const email  = req.body.email;
        const img  = req.body.data.img;
        const name  = req.body.data.name;
        const serial  = req.body.data.serial;
        const info  = req.body.data.info;
        const stock  = req.body.stock;
        const price  = req.body.data.price;
        
        //find cart from db by email,serial
        const cart = await Cart.findOne({email,serial});

        //had Cart
        if (cart){

            const newStock = cart.stock + stock;

            const addStock = await Cart.findOneAndUpdate({
                email,
                serial
            },
            {
                stock : newStock
            })
            console.log("addStock");
            res.status(200).json(addStock);
        }
        //not had Cart,Create New
        else{
            const newCart = await Cart.create({
                _id,
                email,
                img,
                name,
                serial,
                info,
                stock,
                price,
            }) 
            console.log("addCart");
            res.status(200).json(newCart);
        }
 
    }catch(err){
        console.log(err);
    }
})
app.post("/addCartCustom", async (req,res) =>{
    try{
        const _id = req.body._id;
        const email  = req.body.email;
        const img  = req.body.img;
        const name  = req.body.name;
        const serial  = req.body.serial;
        const info  = req.body.info;
        const stock  = req.body.stock;
        const price  = req.body.price;
        
        const newCart = await Cart.create({
            _id,
            email,
            img,
            name,
            serial,
            info,
            stock,
            price
        }) 
        console.log("addCart");
        res.status(200).json(newCart);
    }catch(err){
        console.log(err);
    }
})
app.post("/cart", (req,res) =>{
    const email = req.body.email;
    Cart.find({email : email} , (err,data) => {
        if(err) throw err
        console.log("getCart")
        res.send(data);
    });
})

app.post("/removeCart", (req,res) =>{

    Cart.findOneAndDelete({_id : req.body._id} , (err) => {
        if(err) throw err
        console.log("removeCatr");
        console.log(req.body._id);
        
    });
})

app.post("/removeCartAll", (req,res) =>{

    Cart.remove({email : req.body.email} , (err) => {
        if(err) throw err
        res.send("S");
        console.log("removeCatrAll");
        console.log(req.body.email);
        
    });
})

app.post("/editCartStock", async (req,res) =>{
    try{
        console.log("true");
        const email  = req.body.email;
        const serial  = req.body.data.serial;
        const stock  = req.body.stock;
       
        //find cart from db by email,serial
        const cart = await Cart.findOne({email,serial});

        //had Cart
        if (cart){

            const newStock = stock;

            const addStock = await Cart.findOneAndUpdate({
                email,
                serial
            },
            {
                stock : newStock
            })
            console.log("editCartStock");
            res.status(200).json(addStock);
        }
 
    }catch(err){
        console.log(err);
    }
})

app.post("/addAddress", async (req,res) =>{
    try{
        const email = req.body.email;   
        const name = req.body.name;
        const phone = req.body.phone;
        const province = req.body.province;
        const district = req.body.district;
        const postalcode = req.body.postalcode;
        const info = req.body.info;

        const address = await Address.findOne({email});
        if (address){

            const editAddress = await Address.findOneAndUpdate({
                email
            },
            {
                name : name,
                phone : phone,
                province : province,
                district : district,
                postalcode : postalcode,
                info : info,
            })
            console.log("editAddress");
            res.status(200).json(editAddress);
        }

        else {const newAddress = await Address.create({
            
            email,
            name,
            phone,
            province,
            district,
            postalcode,
            info
        }) 
        console.log("address");
        res.status(200).json(newAddress);}
    }catch(err){
        console.log(err);
    }
})

app.post("/getaddress", (req,res) =>{
    const email = req.body.email;
    Address.find({email : email} , (err,data) => {
        if(err) throw err
        console.log("getAddress")
        res.send(data);
    });
})

app.post("/searchShop", (req,res) =>{
    const search = req.body.search;
    Products.find({name : search} , (err,data) => {
        if(err) throw err
        console.log("searchShop")
        res.send(data);
    });
})

module.exports = app;