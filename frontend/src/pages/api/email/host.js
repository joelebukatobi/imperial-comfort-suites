// Config\, Utils & Helpers
import { SMTP_PASSWORD, SMTP_USERNAME } from '@/config//index';
// External Libraries
import nodemailer from 'nodemailer';
export default async function (req, res) {
  const { name, email, message, phone } = req.body;
  //
  const transporter = nodemailer.createTransport({
    port: 2525,
    host: 'smtp.mailtrap.io',
    // secure: true,
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  });
  //
  const mailData = {
    from: `${email}`,
    to: 'joelebuka@gmail.com',
    subject: `Message From ${name}`,
    text: message + ' | Sent from: ' + email,
    html: `<div>${message}</div><p>Sent from:
   ${email} | Phone No:${phone}</p>`,
  };
  //
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
      res.send('error' + JSON.stringify(err));
    } else {
      console.log(info);
      res.send('success');
    }
  });
}
