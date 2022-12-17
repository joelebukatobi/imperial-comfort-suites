// React
import { useState } from 'react';
// Components
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Input from '@/global//elements/Input';
import Textarea from '@/global//elements/Textarea';
import Button from '@/global//elements/Button';
import Select from '@/global//elements/Select';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/email/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
        service: service,
      }),
    });

    if (res.status === 200) {
      // setOpen(true);
      console.log('ok');
    }
  };
  return (
    <Layout pageTitle={'Contact | Imperial Comfort Suites'}>
      <Container>
        <section className="contact">
          <header>
            <span>Getting in touch</span>
            <h2>Drop your message here</h2>
          </header>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                name={'name'}
                onChange={(e) => setName(e.target.value)}
                type={'text'}
                required={'required'}
                placeholder={'Full Name'}
              />
              <Input
                name={'email'}
                onChange={(e) => setEmail(e.target.value)}
                type={'text'}
                required={'required'}
                placeholder={'Email Address'}
              />
            </div>
            <div>
              <Select onChange={(e) => setService(e.target.value)}>
                <option value="">Select Service Type</option>
                <option value={1}>1 Bedroom</option>
                <option value={2}>2 Bedroom</option>
                <option value={3}>3 Bedroom</option>
                <option value={4}>4 Bedroom</option>
              </Select>
              <Input
                name={'phone'}
                onChange={(e) => setPhone(e.target.value)}
                type={'phone'}
                required={'required'}
                placeholder={'Phone Number'}
              />
            </div>
            <Textarea
              name={'message'}
              onChange={(e) => setMessage(e.target.value)}
              required={'required'}
              placeholder={'Message'}
            />
            <Button className={'w-full'}>Send Message</Button>
          </form>
        </section>
      </Container>
    </Layout>
  );
}
