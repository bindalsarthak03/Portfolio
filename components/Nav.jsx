import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'


const Nav = () => {
    return (
        <div className={styles.navbar}>
            <p className={styles.name}> SARTHAK BINDAL</p>
            <ul>
                <li>
                <Link href ='#' target = "_blank">
                Home
                </Link></li>
                <li>
                <Link href ='#skills' target = "_blank">
                Skills
                </Link></li>
                <li>
                <Link href ='#exp' target = "_blank">
                Experience
                </Link></li>
                <li>
                <Link href ='#projects' target = "_blank">
                Projects
                </Link></li>
                <li>
                <Link href ='#contact' target = "_blank">
                Contact Me
                </Link></li>
                <li>
                <Link href ='https://drive.google.com/file/d/1BZ95lvQYAV1Vq_CGeEIDiE1LcCYptLL4/view?usp=sharing' >
                <a target="_blank">Resume</a>    
                
                </Link></li>
            </ul>
        </div>
    )
}



export default Nav
