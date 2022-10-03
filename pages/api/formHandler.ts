import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { config } from '../../config';

sgMail.setApiKey(config.apiKey);

type Data = {
  name: string;
};

type Msg = {
  to: string;
  cc?: string;
  from: string;
  subject: string;
  text?: string;
  html: string;
};

export default async function formHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const msg: Msg = {
      to: `${req.body.email}`, // Change to your recipient
      cc: 'me@dylanullrich.com',
      from: 'me@dylanullrich.com', // Change to your verified sender
      subject: `Thanks for your message, ${req.body.name}!`,
      html: `
      <head>
    <style>
      * {
        background-color: #0f172a;
        color: #9ca3af;
      }
      h2,
      h4 {
        color: #d1d5db;
      }

      strong {
        color: #67e8f9;
      }
      div {
        padding: 12px;
      }
    </style>
  </head>

  <div>
    <h2>Hi ${req.body.name},</h2>
      <h4>
        Thank you for your email. I will be following up with you shortly from
        <strong>me@dylanullrich.com</strong>.
      </h4>
      <h4>You will be contacted at: <strong>${req.body.email}</strong></h4>
        <p>You sent the following message:</p>
        <p style="margin-left: 30px;">${req.body.message}</p>
      <h4>I am looking forward to speaking with you soon!</h4>
      <h4>-Dylan Ullrich</h4>
      <h4><a href="me@dylanullrich.com">me@dylanullrich.com</a></h4>
      <h4>
      P.S. Feel free to reply to this message if there is any additional
      information you would like to include.
      </h4>
  </div>
      `,
    };
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
}
