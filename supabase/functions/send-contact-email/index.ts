
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  recipientEmail: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message, recipientEmail }: ContactEmailRequest = await req.json();

    // Validate input
    if (!name || !email || !subject || !message || !recipientEmail) {
      throw new Error("Missing required fields");
    }

    // In Resend, we need to use a verified domain for the "from" address
    // For the free tier, we'll use the default Resend domain
    // The recipient email should be the one you registered with Resend
    const verifiedEmail = "091ramboy@gmail.com"; // Your Resend-registered email

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Onboarding <onboarding@resend.dev>",
      to: [verifiedEmail], // Send to your Resend-verified email
      reply_to: email, // Set reply-to as the contact form submitter
      subject: `New Contact from ${name}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h1 style="color: #333; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h1>
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>
          <div style="margin-bottom: 20px;">
            <strong>Message:</strong>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 14px;">This message was sent from your B.Tech Portfolio contact form.</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
