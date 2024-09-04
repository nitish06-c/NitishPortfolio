import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message
        },
        publicKey
      );
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Email sending failed', error: error });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
