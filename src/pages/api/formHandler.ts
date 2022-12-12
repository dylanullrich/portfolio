import sgMail from "@sendgrid/mail";
import { config } from "../../../config";
import type { APIRoute } from "astro";

type Data = {
  name: string;
};

type Msg = {
  to: string;
  cc?: string;
  from:
    | string
    | {
        name: string;
        email: string;
      };
  replyTo: string;
  subject: string;
  text?: string;
  html: string;
};

sgMail.setApiKey(config.apiKey);

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const email = body.email;
    const name = body.name;
    const message = body.message;

    const msg: Msg = {
      to: `${email}`,
      cc: "me@dylanullrich.com",
      from: {
        name: "Dylan Ullrich",
        email: "contact@dylanullrich.com",
      },
      replyTo: "me@dylanullrich.com",
      subject: `Thanks for your message, ${name}!`,
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
    <h2>Hi ${name},</h2>
      <h4>
        Thank you for your email. I will be following up with you shortly from
        <strong>me@dylanullrich.com</strong>.
      </h4>
      <h4>You will be contacted at: <strong>${email}</strong>.</h4>
        <p>You sent the following message:</p>
        <p style="margin-left: 30px;">${message}</p>
      <h4>I am looking forward to speaking with you soon!</h4>
      <h4>-Dylan Ullrich</h4>
      <h4><a href="mailto:me@dylanullrich.com">me@dylanullrich.com</a></h4>
      <h4>
      P.S. Feel free to reply to this message if there is any additional
      information you would like to include.
      </h4>
  </div>
      `,
    };
    console.log("Email sent");
    const messageSent = await sgMail.send(msg);

    return new Response(JSON.stringify(messageSent), {
      status: 200,
    });
  }

  return new Response(
    JSON.stringify({ mesage: "There was a problem with the call." }),
    { status: 400 }
  );
};
