const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    roles:{
        type:[String],
        require:true
    },
    profile:{
        firstname:{
            type:String,
            require:true
        },
        lastname:{
            type:String,
            require:true
        },
        age:{
            type:Number,
            require:true
        },
    },
    lastlogin :{
        type:Date,
        require:true
    }
})

const User = mongoose.model('User',userSchema);
module.exports= User;

