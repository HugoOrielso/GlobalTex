import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/formulario.css'
export const FormContacto = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_c20dpv9', 'template_8lc8fwc', form.current, 'Yq9oduayiN8UrHn0k')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
    };
  
    return (
    <section className='container-form'>
      <form ref={form} onSubmit={sendEmail} className='formulario-contacto'>
        <h3>Contáctanos</h3>
        <input type="text"  name="user_name" className='user_name input-form' autoComplete='off' placeholder='Nombre'/>
        <input type="email"  name="user_email" className='user_email input-form' autoComplete='off' placeholder='Correo'/>
        <textarea  name="message" className='message input-form' placeholder='Mensaje'/>
        <input type="submit" value="Send" className='input-enviar input-form' autoComplete='off'/>
      </form>
      </section>

    );
  };

export default FormContacto