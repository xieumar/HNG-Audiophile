"use server";

import nodemailer from "nodemailer";

interface SendOrderEmailParams {
  to: string;
  name: string;
  orderId: string;
  items: { name: string; quantity: number; price: number }[];
  totals: { subtotal: number; shipping: number; vat: number; grandTotal: number };
  baseUrl: string;
}

export async function sendOrderConfirmationEmail({
  to,
  name,
  orderId,
  items,
  totals,
  baseUrl,
}: SendOrderEmailParams) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // or "smtp.zoho.com"
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const itemsHtml = items
    .map(
      (item) =>
        `<p>${item.name} (x${item.quantity}) - $${item.price.toLocaleString()}</p>`
    )
    .join("");

  const html = `
   <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f9f9f9; padding: 40px 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08);">
      <div style="background-color: #101010; color: #ffffff; padding: 24px 32px;">
        <h1 style="margin: 0; font-size: 22px;">Audiophile</h1>
      </div>

      <div style="padding: 32px;">
        <h2 style="color: #101010; margin-bottom: 8px;">Hi ${name},</h2>
        <p style="color: #333333; font-size: 16px; line-height: 1.6;">
          Thank you for your order! Your order ID is 
          <b style="color: #d87d4a;">${orderId}</b>.
        </p>

        <h3 style="margin-top: 32px; color: #101010; border-bottom: 2px solid #d87d4a; display: inline-block; padding-bottom: 4px;">
          Order Summary
        </h3>
        
        <div style="margin-top: 16px; padding: 16px; background-color: #fafafa; border-radius: 8px;">
          ${itemsHtml}
        </div>

        <div style="margin-top: 24px;">
          <p style="font-size: 16px; color: #333;"><strong>Subtotal:</strong> $${totals.subtotal.toLocaleString()}</p>
          <p style="font-size: 16px; color: #333;"><strong>Shipping:</strong> $${totals.shipping.toLocaleString()}</p>
          <p style="font-size: 16px; color: #333;"><strong>VAT:</strong> $${totals.vat.toLocaleString()}</p>
          <h3 style="margin-top: 16px; color: #101010;">Grand Total: 
            <span style="color: #d87d4a;">$${totals.grandTotal.toLocaleString()}</span>
          </h3>
        </div>

        <p style="margin-top: 40px; color: #555; font-size: 15px;">
          Thank you for shopping with us!<br/>
          <strong>The Audiophile Team</strong>
        </p>
      </div>

      <div style="background-color: #101010; color: #ffffff; text-align: center; padding: 16px; font-size: 13px;">
        © ${new Date().getFullYear()} Audiophile. All rights reserved.
      </div>
    </div>
  </div>
  `;

  await transporter.sendMail({
    from: `"Exhausted HNG Intern" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Order Confirmation`,
    html,
  });
}
