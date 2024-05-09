
function generateOtp () {

   return Math.floor(1000 + Math.random() * 9000);

}

export default generateOtp;



var unirest = require("unirest");

var req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");

req.headers({
  "authorization": "YOUR_API_KEY"
});

req.form({
  "message": "This is a test message",
  "language": "english",
  "route": "q",
  "numbers": "9999999999,8888888888,7777777777",
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});

