import React, { useRef } from 'react';
import './Form.css';
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {
  const captcha = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      alert('Thanks! Your message was sent');
      captcha.current.reset(); // Reiniciar el reCAPTCHA
      e.target.reset(); // Reiniciar el formulario después del envío
    } else {
      alert('Please, verify that you are human');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' />
        <label>Email</label>
        <input type='email' />
        <label>Title</label>
        <input type='text' />
        <label>Message</label>
        <textarea rows='6' placeholder='Please write your message' />
        <div className='recaptcha'>
          <ReCAPTCHA
            ref={captcha}
            sitekey='6LcHSjEmAAAAADpYYDwgZFzzNw5nBlrt5VfXFiVc'
          />
        </div>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
