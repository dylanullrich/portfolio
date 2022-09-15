import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { config } from '../../config';

sgMail.setApiKey(config.apiKey);

type Data = {
  name: string;
};

type Msg = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
};

export default async function formHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const msg: Msg = {
      to: 'dylan@getullrichordietrying.com', // Change to your recipient
      from: 'dylan@getullrichordietrying.com', // Change to your verified sender
      subject: `CONTACT REQUEST FROM ${req.body.name}!`,
      text: req.body.message,
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
        <h2>${req.body.name}</h2>
        <br>
        <p>${req.body.message}</p>
        <br>
        <p>Their email is: <strong>${req.body.email}</strong></p>
      </div>
      `,
    };
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
}
