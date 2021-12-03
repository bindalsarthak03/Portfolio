import React from 'react'
import styles from '../styles/Header.module.css'

 const Header = () => {
    return (
        <div data-aos="fade-up" className={styles.container}>
        <div className={styles.h1}>
            <h1>Hey👋Myself SARTHAK BINDAL</h1><br/>
            <p>I am a sophomore at IIIT KOTTAYAM, pursuing BTech in Computer Science Engineering with an interest in Competitive Coding. I have done some frontend work in web and app development.
Looking forward to connect with people from diverse backgrounds.</p>
        </div>
        </div>
    )
}

export default Header