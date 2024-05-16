const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { 
    user: "asimrasheed442@gmail.com",
    pass: "goggatnkgzljkbts",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(email, otp) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Asim Rasheed 👻" <asimrasheed442@gmial.com>', // sender address
    to: email, // list of receivers
    subject: "Plants App-OTP", // Subject line
    text: "", // plain text body
    html: `<div> 
    <h4>Recipe App OTP</h4>
    <p>Your OTP is <b>${otp}</b></p>

    </div> `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  return info.messageId;
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

exports.sendMail = sendMail;