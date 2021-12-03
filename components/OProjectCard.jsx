import Image from 'next/image'
import styles from '../styles/OProjectCards.module.css'
import Link from 'next/dist/client/link'

function OProjectCard(props) {
    return (

        <div className={styles.container}>
           
            <div className={styles.about}>
            <Link href={props.url}>
                <a target="_blank">
                <span className={styles.card_category}>{props.title}</span>
                </a>
            </Link>
                <p className={styles.stack}>{props.stack}</p>
                <p className={styles.desc}>{props.desc}</p>
            </div>
        </div>

    )
}

export default OProjectCard