import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Present' : 'Missing');
  try {
    const { name, email, message } = await request.json();
    console.log('Form Data:', { name, email, message });

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use a verified domain or Resend's default
      to: 'tarakram9141@gmail.com', // Replace with your actual email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Email Sent:', data);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Server Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}