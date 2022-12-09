// React
import { useState } from 'react';
// Components
import Button from '@/global//elements/Button';
import Input from '@/global//elements/Input';
import Textarea from '@/global//elements/Textarea';

export default function Host({ modal, closeModal }) {
  // State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={modal ? 'host' : 'hidden'}>
      <form action="">
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
        <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
          <Input
            name={'name'}
            onChange={(e) => setCity(e.target.value)}
            type={'text'}
            required={'required'}
            placeholder={'Full Name'}
          />{' '}
          <Input
            name={'Email Address'}
            onChange={(e) => setCity(e.target.value)}
            type={'email'}
            required={'required'}
            placeholder={'Email Address'}
          />
        </div>
        <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
          <Input
            name={'Phone Number'}
            onChange={(e) => setCity(e.target.value)}
            type={'phone'}
            required={'required'}
            placeholder={'Phone'}
          />
        </div>
        <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
          <Textarea
            name={'message'}
            onChange={(e) => setCity(e.target.value)}
            required={'required'}
            placeholder={'Type Message'}
          />
        </div>
        <Button>Send Message</Button>
      </form>
    </div>
  );
}
