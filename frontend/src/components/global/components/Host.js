// React
import { useState } from 'react';
// Next JS
// Components
import Button from '@/global//elements/Button';
import Input from '@/global//elements/Input';
import Textarea from '@/global//elements/Textarea';
import Success from '@/global//components/Success';
//
export default function Host({ modal, closeModal }) {
  // State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/email/host`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
      }),
    });

    if (res.status === 200) {
      setOpen(true);
    }
  };

  return (
    <div className={modal ? 'host' : 'hidden'}>
      <form action="" onSubmit={handleSubmit}>
        <svg
          onClick={() => {
            closeModal(false);
          }}
          className=""
        >
          <use href="/images/sprite.svg#icon-something" />
        </svg>
        <header>
          <h3>Become a Host</h3>
          <p>Enter your information below and I’ll reach out to discuss how we can work together!</p>
        </header>
        <div className="w-full flex justify-between gap-x-[1.6rem]">
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
            type={'email'}
            required={'required'}
            placeholder={'Email Address'}
          />
        </div>
        <div className="flex w-full">
          <Input
            name={'phone'}
            onChange={(e) => setPhone(e.target.value)}
            type={'phone'}
            required={'required'}
            placeholder={'Phone'}
          />
        </div>
        <div className="flex w-full">
          <Textarea
            name={'message'}
            onChange={(e) => setMessage(e.target.value)}
            required={'required'}
            placeholder={'Type Message'}
          />
        </div>
        <Button>Send Message</Button>
      </form>

      <Success
        modal={open}
        caption={'Host Application Sent'}
        message={`Hi there we've gotten your application, we'll reach out ASAP!`}
      />
    </div>
  );
}
