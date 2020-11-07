const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  console.log(message)

  const info = await transport.sendMail(message);

  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
