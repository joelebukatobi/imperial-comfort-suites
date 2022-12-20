// React
import { useState } from 'react';
// Components
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Input from '@/global//elements/Input';
import Textarea from '@/global//elements/Textarea';
import Button from '@/global//elements/Button';
import Select from '@/global//elements/Select';
import Success from '@/global//components/Success';

export default function Contact() {
  // Route
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

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
      setOpen(true);
    }
  };
  return (
    <Layout pageTitle={'Contact | Imperial Comfort Suites'}>
      <Container>
        <section className="contact">
          <header data-aos="fade-right" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-in-out">
            <span>Getting in touch</span>
            <h2>Drop your message here</h2>
          </header>
          <form
            onSubmit={handleSubmit}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
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
                <option value={'1 Bedroom'}>1 Bedroom</option>
                <option value={'2 Bedroom'}>2 Bedroom</option>
                <option value={'3 Bedroom'}>3 Bedroom</option>
                <option value={'4 Bedroom'}>4 Bedroom</option>
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
      </Container>{' '}
      <Success
        modal={open}
        caption={'Message Sent'}
        message={`Hi there we've gotten your email, we'll reach out ASAP!`}
      />
    </Layout>
  );
}
