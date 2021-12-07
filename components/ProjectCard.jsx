import Image from 'next/image'
import styles from '../styles/ProjectCards.module.css'
import Link from 'next/dist/client/link'

function ProjectCard(props) {
    return (

        <div className={styles.container}>
            <Link href={props.url}>
                <a target="_blank">
                    <div className={styles.img}>

                        <Image className={styles.Image} src={props.imgsrc} height={200} width={350} layout={'fixed'} />
                    </div>
                </a>
            </Link>
            <div className={styles.about}>
                <Link href={props.url}> 
                    <a target="_blank">
                        <span className={styles.card_category}>{props.title}</span>
                    </a>
                </Link>
                <p className={styles.desc}>{props.desc}</p>
            </div>
        </div>

    )
}

export default ProjectCard