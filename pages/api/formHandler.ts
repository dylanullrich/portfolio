// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
      html: `<h2>${req.body.name}</h2><br><p>${req.body.message}</p><br><p>Their email is: <strong>${req.body.email}</strong></p>`,
    };
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
  res.status(200).json({ name: 'John Doe' });
}
