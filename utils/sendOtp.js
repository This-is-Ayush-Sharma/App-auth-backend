const nodemailer = require("nodemailer");

const send = async(data)=>{
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Your Otp is here 👻"', // sender address
    to: `${data.email}`, // list of receivers
    subject: "Find your otp here", // Subject line
    text: `your otp is ${data.otp}`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}
