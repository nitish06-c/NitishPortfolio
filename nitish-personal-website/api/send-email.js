import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const userId = process.env.EMAILJS_USER_ID;

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: templateParams,
      });

      if (response.status === 200) {
        res.status(200).json({ message: 'Email sent successfully' });
      } else {
        console.error('Email sending failed', response.data);
        res.status(500).json({ message: 'Email sending failed', error: response.data });
      }
    } catch (error) {
      console.error('Error:', error.message, error.response?.data);
      res.status(500).json({ message: 'Email sending failed', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
