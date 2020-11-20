"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'user', // generated ethereal user
      pass: 'pass', // generated ethereal passwordn
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Заявка с сайта" <info@vkusno-zdorovo.ru>', // sender address
    to: "info@vkusno-zdorovo.ru", // list of receivers
    subject: "Заявка с сайта", // Subject line
    text: "Имя: / Телефон: / Почта:", // plain text body
    html: "Имя: <b>имя</b><br>Телефон: <b>телефон</b><br>Почта: <b>почта</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

main().catch(console.error);
