import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from 'react-toastify';

export const Contact = () => {
  const form = useRef();


  const toaster =() =>{
    toast.success("Message Sent");

  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0xvalib', 'template_y7iq50r', form.current, {
        publicKey: 'YMzycvF6eIYEoIxD8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toaster();
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{marginLeft:'58px', width:'80%'}}>
      <ToastContainer />
      <div>
      <label style={{ display: "flex", justifyContent: "start", paddingLeft: "5px"}}>Name</label>
      <input type="text" name="user_name" style={{ width:'100%' , border:'none',outline:'none',backgroundColor:'#F5F7F8',padding:'5px',borderRadius:'10px'}}/>
      </div>
      <div>
      <label style={{ display: "flex", justifyContent: "start", paddingLeft: "5px" ,paddingTop:'10px'}}>Email</label>
      <input type="email" name="user_email"  style={{ width:'100%' , border:'none',outline:'none',backgroundColor:'#F5F7F8',padding:'5px',borderRadius:'10px'}}/>
      </div>
      <div>
      <label style={{ display: "flex", justifyContent: "start", paddingLeft: "5px",paddingTop:'10px'}}>Message</label>
      <textarea name="message" style={{ width:'100%' , border:'none',outline:'none',backgroundColor:'#F5F7F8',padding:'5px',borderRadius:'10px',resize:'none'}}/>
      </div>
      <div>
      <input type="submit" value="Send" style={{ display: "flex", justifyContent: "start", paddingLeft: "5px",padding:'7px',width:'100%' ,marginTop:'10px',border:'none',backgroundColor:'orange'}} />
      </div>
    </form>
  );
};
