import { useState, useEffect, useRef } from 'react';
import Error from './Error'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from "react-i18next";
const Contact = (user) => {
  const [t] =useTranslation("global");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
      if( Object.keys(user).length > 0  ) {
          setName(user.name)
          setEmail(user.email)
          setMessage(user.message)
      }
  }, [user])

  const contact_info = [
    { logo: "mail", text: "devlahoya@gmail.com" },
    { logo: "logo-whatsapp", text: "+52 (618) 271-84-02" },
    {
      logo: "location",
      text: "Durango, MX",
    },
  ];
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if( [ name, email, message ].includes('') ) {

        setError(true)
        return;
    } 
    setError(false)
    
emailjs.sendForm('service_qhv6noc', 'template_ukfi4rb', form.current, 'CvKAhNJaQkagHQlHn')
.then((result) => {
      // Reiniciar el form
      setName('')
      setEmail('')
      setMessage('')
      toast.success('Your message has been sent!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}, (error) => {
  <Error><p>There was an error</p></Error>
});
}

  return (
    <section id="contact" className=" text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
        {t("contact.contact")} <span className="text-cyan-600">{t("contact.me")}</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">{t("contact.get")}</p>

        <div
          className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
          { error &&  <Error><p>{t("contact.fields")}</p></Error>}
            <input id="name "type="text" name="from_name" placeholder="Your Name" value={name}
            onChange={ (e) => setName(e.target.value) }/>
            <input id="email" type="email" name="user_email" placeholder="Your Email Address" value={email}
            onChange={ (e) => setEmail(e.target.value) }/>
            <textarea id="message" name="message" placeholder="Your Message" rows={10} value={message}
            onChange={ (e) => setMessage(e.target.value) }></textarea>
            <button type="submit" className="btn-primary w-fit">{t("contact.send")}</button>
          </form>


          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </section>
  );
};

export default Contact;
