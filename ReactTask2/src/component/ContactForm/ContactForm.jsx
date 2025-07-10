import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage, MdRampRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("")
    const [text,setText]=useState("")
    

    const onSubmit=(event)=>{
      event.preventDefault();
      setName(event.target[0].value)
      setEmail(event.target[1].value)
      setText(event.target[2].value)
    }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
              <Button text="VIA SUPPORT CHAT" icon={<MdMessage onsize="24px" />}/>
              <Button text="VIA CALL" icon={<FaPhoneAlt />} />
            </div>
               <Button isOutline={true} 
               text="VIA EMAIL FORM" 
               icon={<HiOutlineMail onsize="24px" />}
               />
            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                  <label htmlFor="name">Name</label>
                  <input type='text' name='name' />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor="email">E-mail</label>
                  <input type='email' email='email' />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor="text">Text</label>
                  <textarea name='text' rows={5}></textarea>
                </div>
                <div style={{float:'right',marginRight:"180px"}}>
                     <Button isOutline={false} text="Submit" />
                </div>

            </form>
            <div>
              {
                name+" "+email+" "+text
              }
            </div>
         </div>
              <div className={styles.contact_image}>
                  <img src="./Images/main image.png" 
                   alt="this is image"></img>
              </div>
    </section>
  )
}

export default ContactForm
