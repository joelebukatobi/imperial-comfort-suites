import cookie from 'cookie';
import { API_URL } from '@/config//index';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, password, password_confirmation } = req.body;

    const api = await fetch(`${API_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation,
      }),
    });

    const data = await api.json();

    if (api.success === true) {
      res.status(200).json(data);
    } else {
      res.json({
        message: data.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
