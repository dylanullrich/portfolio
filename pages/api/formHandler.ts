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
          background-color: rgb(15 23 42);;
          color: rgb(156 163 175);
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
  <p>You sent the following message:</p>
  <p style="margin-left:30px;">${req.body.message}</p>
  <p>
    You will be contacted at: <strong>${req.body.email}</strong>.
  </p>
</div>
      `,
    };
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
}
