

function generateOtp () {

    return Math.floor(1000 + Math.random() * 9000);
}

let otp = generateOtp();

let mobile = "8767482793";

import fast2sms from "fast-two-sms";

// const fast2smsClient =  fast2sms({
//   apiKey: "SMS_API_KEY"
// });


const otpOptions = {
    authorization: process.env.SMS_API_KEY,

    to: "+1234567890",

    from: "+1234567890",
    message: ` hi user,
     this message from the AROHI softwares and your verification code is ${otp},
     this otp is valid for 10 minutes, if otp doesn't work, please regenrate it again.`,
    number: `${mobile}`

}

fast2sms.sendMessage(otpOptions)

.then((response) => {
    console.log(response);

    if(response){
        console.log("error in sending the otp");
        return response.data;
    }
    else{
        console.log("your otp is sent successfully", otpOptions);
        return response.error;
    }
})

.catch((error) => {
    console.log(error);
});