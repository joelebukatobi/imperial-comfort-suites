// Config\, Utils & Helpers
import { SMTP_PASSWORD, SMTP_USERNAME } from '@/config//index';
// External Libraries
import nodemailer from 'nodemailer';
export default async function (req, res) {
  const { name, email, message, phone } = req.body;
  //
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.office365.com',
    secure: false,
    requireTLS: true,
    logger: true,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  });
  //
  const mailData = {
    from: 'support@imperialcomfortsuites.com',
    to: 'support@imperialcomfortsuites.com',
    subject: `Message From ${name}`,
    text: message + ' | Sent from: ' + email,
    html: `<div>${message}</div><p>Sent from:
   ${email} | Phone No:${phone}</p>`,
  };

  try {
    await transporter.sendMail({
      mailData,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: '' });
}
