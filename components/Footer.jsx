import styles from '../styles/Footer.module.css'
import Link from 'next/dist/client/link'
import {FaGithub,FaLinkedin,FaInstagram,FaFacebook, FaTwitter} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.desc}>Designed and Developed by Sarthak Bindal</div>
            <div className={styles.socicon}>
            <Link href="https://github.com/bindalsarthak03">
                <a target="_blank">
                <FaGithub/>
                </a>
            </Link>     
            <Link href="https://www.linkedin.com/in/sarthak-bindal-747a6b202/">
                <a target="_blank">
                <FaLinkedin/>
                </a>
            </Link> 
            <Link href="https://twitter.com/SarthakBindal03">
                <a target="_blank">
                <FaTwitter/>
                </a>
            </Link> 
            <Link href="https://www.instagram.com/sarthak_0306/">
                <a target="_blank">
                <FaInstagram/>
                </a>
            </Link> 
            <Link href="https://www.facebook.com/sarthak.bindal.77/">
                <a target="_blank">
                <FaFacebook/>
                </a>
            </Link> 
            </div>
        </div>

    )
}

export default Footer
