import { sendEmail } from '../../library/email';

export default function handler(req, res) {
  const {body} = req;
  sendEmail(body);
  console.log(body);
  res.status(200).json({ user: 'Ada Lovelace' });
}