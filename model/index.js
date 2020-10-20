const { query } = require("express");
const mongoose =require("mongoose");
const { Activity } = require("./schemas");
const Schema = require(__dirname+"/schemas.js");
// const autoIncrement = require("mongoose-auto-increment");
// mongoose.set('useCreateIndex', true)

const currentUserAcc = 346576854975;
const currentUserName = "Gaurav Shreevastav";


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bankWeb",{ useNewUrlParser: true , useUnifiedTopology: true } );




// .................................................Functions.................................................



function getDateTime () {

    let today = new Date();
    let options = {
        year : "numeric",
        day : "numeric",
        month : "long"
    };
    
    let date =  today.toLocaleDateString("en-US",options);
    let time = today.toLocaleTimeString();
    return [date,time];

}



// .................................................All exports.................................................


exports.myData = (userAcc)=> {

    return new Promise ( function ( resolve,reject ) {
        Schema.Users.findOne({ accNo : userAcc }, (err,curUser)=>{
            resolve(curUser);
        });
    });

}




exports.allUserData = ()=> {

    return new Promise ( function ( resolve,reject ) {
        Schema.Users.find({ accNo : { $ne : currentUserAcc} }, "accNo name email gender" , (err,users)=>{
            resolve(users);
        });        
    });

}




exports.actData = ()=> {

    return new Promise ( function ( resolve,reject ) {
        Schema.Activity.find((err,activities)=>{
            resolve(activities);
        });        
    });

}



exports.updateData = ( resAcc,amount )=> {

    Schema.Users.findOne({ accNo:currentUserAcc },"balance",(err,temp)=>{
        let newTemp=temp.balance-parseInt(amount);
        Schema.Users.updateOne({ accNo:currentUserAcc },{ balance:newTemp },(err)=>{});
    });

    Schema.Users.findOne({ accNo:resAcc },"balance",(err,temp)=>{
        let newTemp= temp.balance+parseInt(amount);
        Schema.Users.updateOne({ accNo:resAcc },{ balance:newTemp },(err)=>{});
    });

    var now = getDateTime();
    var nowDate = now[0];
    var nowTime = now[1];

    Schema.Users.findOne({ accNo:resAcc },"name",(err,temp)=>{
        let act = new Activity ({
            date : nowDate,
            time : nowTime,
            fromAcc : currentUserAcc,
            fromName : currentUserName,
            toAcc : resAcc,
            toName : temp.name,
            amount : amount
        });
        act.save();
    });

}




// .................................................Commented code for adding data to database.................................................





// let temp = new Schema.Users ({
//     accNo : 586321478963,
//     balance : 8000,
//     name : "Vaishnav Sunil",
//     mobNo : 8745123698,
//     email : "sunilvaishnav5252@gmail.com",
//     gender : "Male",
//     age : 18
// });

// temp.save();

// console.log("Success");




// let act = new Schema.Activity ({
//     date : "October 09, 2020",
//     time : "10:01:55 PM",
//     fromAcc : 456321456321,
//     fromName : "Prajapat Chirag",
//     toAcc : currentUserAcc,
//     toName : currentUserName,
//     amount : 200
// });

// act.save();

// console.log("Success");