import { type NextRequest } from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const message = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: message?.subject || 'Customer Feedback',
    text: message?.feedback,
  };

  let response;
  try {
    await transporter.sendMail(mailOptions);
    response = new Response(message?.feedback);
  } catch (error) {
    response = new Response("Email failed to send.");
  }

  return response;
}
