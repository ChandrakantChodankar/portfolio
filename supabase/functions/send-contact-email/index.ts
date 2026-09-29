import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  name: string;
  email: string;
  company?: string | null;
  enquiry_type: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const payload: ContactPayload = await req.json();

    if (!payload.name || !payload.email || !payload.enquiry_type || !payload.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const recipientEmail = Deno.env.get("NOTIFY_EMAIL") || "chandrakantchodankar06@gmail.com";

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f7f2; border-radius: 12px;">
        <h1 style="color: #B8451F; font-size: 22px; margin-bottom: 24px;">New contact form message</h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px; width: 100px;">Name</td>
            <td style="padding: 8px 0; font-size: 15px; color: #1a1a1a;"><strong>${escapeHtml(payload.name)}</strong></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px;">Email</td>
            <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${escapeHtml(payload.email)}" style="color: #2a7a6b;">${escapeHtml(payload.email)}</a></td>
          </tr>
          ${payload.company ? `
          <tr>
            <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px;">Company</td>
            <td style="padding: 8px 0; font-size: 15px; color: #1a1a1a;">${escapeHtml(payload.company)}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px;">Type</td>
            <td style="padding: 8px 0; font-size: 15px; color: #1a1a1a;">${escapeHtml(payload.enquiry_type)}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e0ddd5; margin: 20px 0;" />
        <h2 style="color: #1a1a1a; font-size: 16px; margin-bottom: 12px;">Message</h2>
        <p style="font-size: 15px; line-height: 1.6; color: #333; white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
        <hr style="border: none; border-top: 1px solid #e0ddd5; margin: 24px 0;" />
        <p style="font-size: 13px; color: #999;">This message was sent from your portfolio contact form.</p>
      </div>
    `;

    const textBody = `New contact form message\n\nName: ${payload.name}\nEmail: ${payload.email}${payload.company ? `\nCompany: ${payload.company}` : ''}\nType: ${payload.enquiry_type}\n\nMessage:\n${payload.message}\n\n— Sent from your portfolio contact form`;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipientEmail],
        reply_to: payload.email,
        subject: `New contact: ${payload.enquiry_type} from ${payload.name}`,
        html: html,
        text: textBody,
      }),
    });

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      console.error("Resend API error:", errText);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
