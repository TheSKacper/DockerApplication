const userModel = require("../model/userModel.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

 const createUser = async(req,res) =>
{
    try {
        const {email,password,name,surname,country,city,street,zipCode} = ({email:req.body.email,password:req.body.password,name:req.body.name,surname:req.body.surname,country:req.body.country,city:req.body.city,street:req.body.street,zipCode:req.body.zipCode})
        const user = await userModel.findOne({email})
        if(user)
        {
            res.status(404).json('User is already existed')
            return
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = {
                id:'',
                email: email.toLowerCase(),
                password: encryptedPassword,
                name:name,
                surname:surname,
                country:country,
                city:city,
                street:street,
                zipCode:zipCode
            }

        const dbUser = await userModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
        
    } catch (error) {
        console.log(error)
    }
}

const userLogin = async(req,res) =>
{
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({email})

        if(user && (await bcrypt.compare(password,user.password)))
        {
            res.send(generateTokenResponse(user))
        }
        else
        {
            res.status(200).json("Email or password invalid !")
        }
    } catch (error) {
        console.log(error)
    }
}

const getAllUser = async(req,res) =>
{
    try {
        const find = await userModel.find()
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}


const generateTokenResponse = (user) => {
    const token = jwt.sign({
        email:user.email
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }

  module.exports = {
    createUser,
    userLogin,
    getAllUser
  };