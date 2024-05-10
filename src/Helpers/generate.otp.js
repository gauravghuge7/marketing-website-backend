
// function generateOtp () {

//    return Math.floor(1000 + Math.random() * 9000);
// }

// import unirest from "unirest";


// function sendOtp (mobile) {

//   const otp = generateOtp();
//   console.log(otp);

//   // var unirest = require("unirest");
 

//   var req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");

//   req.headers({
//     "authorization": "kX8sBQdJA1MP2HYRCf4Da0c7tbgEqrmLU5FvuVOh3SzGw6xylTwXfNGQMCn63KSrayi5kUzEvbx9A4jI"
//   });


//   req.form({
//     "variables_values": `${otp}`,
//     "route": "otp",
//     "numbers": `${mobile}`
//   });


//   req.end(function (res) {
    
//     if (res.error) throw new Error(res.error);

//     console.log(res.body);
//   });

// }

// sendOtp(8767482793);


// export {
//   generateOtp
// }







