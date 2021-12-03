import React from 'react'
import styles from '../styles/Contact.module.css' 
import Link from 'next/dist/client/link'
const Contact = () => {
    return (
        <div data-aos="fade-up" id='contact' className={styles.container}>
            <p className={styles.heading}>Actively looking for internship opportunities.</p>

            <a href="mailto:bindalsarthak03@gmail.com" className={styles.mail}>Contact Me</a>
        </div>
    )
}

export default Contact
