const mongoose =require("mongoose");



// ........................................................User Schema........................................................




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





// ........................................................Activity Schema........................................................




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