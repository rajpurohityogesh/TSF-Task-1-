
var temp;

document.querySelector(".per_cust a").addEventListener("click",()=>{
    temp = document.querySelector(".per_cust #accNo").textContent;
    console.log(temp);
});



exports.accVal = ()=>{
    temp = temp.slice(9,);
    return temp;
}





















// // ..........................................My Data..........................................

// exports.myData = ()=> {

//     var my = {
//         acc : 3465768549751238,
//         bal : 15000,
//         name : "Gaurav Shreevastav",
//         mob : 8742153657,
//         mail : "gauravshreevastav5586@gmail.com",
//         gender : "Male",
//         age : 21
//     };

//     return my;

// }


// // ..........................................Customers Data..........................................


// exports.custData = ()=> {

//     var customers = [
//         {
//             acc : 664821365412,
//             name : "Patel Yash Naresh Bhai",
//             mail : "patelyash2000@gmail.com",
//             gender : "male"
//         },
//         {
//             acc : 412369852465,
//             name : "Viresh Avatar Pashan",
//             mail : "vireshpesh7447@gmail.com",
//             gender : "male"
//         }
//     ];

//     return customers;
// }


// // ..........................................Activities Data..........................................


// exports.actData = ()=> {

//     var activities = [
//         {
//             date : "18 Oct 2020",
//             from : {
//                 acc : 3465768549751238,
//                 name : "Gaurav Shreevastav"
//             },
//             to : {
//                 acc : 664821365412,
//                 name : "Patel Yash Naresh Bhai"
//             },
//             amount : 500
//         },
//         {
//             date : "20 Oct 2020",
//             from : {
//                 acc : 412369852465,
//                 name : "Viresh Avatar Pashan"
//             },
//             to : {
//                 acc : 3465768549751238,
//                 name : "Gaurav Shreevastav"
//             },
//             amount : 800
//         }
//     ];

//     return activities;
// }