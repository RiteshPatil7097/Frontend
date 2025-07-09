import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
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
            <form>
              <label htmlFor="name">Name</label>
              <input type='text' id='name' />
            </form>
        </div>
        
        <div className={styles.contact_image}>
            {/* <img src="./images/main image.png" alt="this is image"></img> */}
        </div>
    </section>
  )
}

export default ContactForm
