const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({

    accNo : Number,
    balance : Number,
    name : String,
    mobNo : Number,
    email : String,
    gender : String,
    age : Number

});

exports.Users = mongoose.model("User",userSchema);




const actSchema = new mongoose.Schema ({

    date : String,
    time : String,
    fromAcc : Number,
    fromName : String,
    toAcc : Number,
    toName : String,
    amount : Number

});

exports.Activity = mongoose.model("Activity",actSchema);