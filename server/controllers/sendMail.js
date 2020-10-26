const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "testmcdev2020@gmail.com",
    pass: "*#123How123Now*#",
  },
});

function sendMailToUser(to, subject, html) {
  const mailOptions = {
    from: "testmcdev2020@gmail.com",
    to: to,
    subject: subject,
    html: `<h4>Welcome to Todo App.</h4>You mail code verification is: <em>${html}</em>`,
  };
  var returnMessage;

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      //console.log(`Error: ${err}`);
      returnMessage = {
        type: "mail confirmation",
        usermailmsg: err,
        password: null,
        code: html,
        status: "WRONG",
      };
    } else {
      // console.log(`Info: ${info.response.status}`);
      returnMessage = {
        type: "mail confirmation",
        usermail: to,
        usermailmsg: info.response,
        password: null,
        code: html,
        status: "RIGTH",
      };
    }
  });

  return returnMessage;
}

module.exports = sendMailToUser;
