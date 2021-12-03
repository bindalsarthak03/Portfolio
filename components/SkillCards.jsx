import Image from 'next/image'
import styles from '../styles/SkillCards.module.css'


function SkillCards(props,key) {
    return (

        <div  className={styles.container}>
            <div className={styles.img}>
                <Image className={styles.img}   src={props.imgsrc} height={80} width={80} layout={'fixed'}  />
            </div>
            <span className={styles.card_category}>{props.title}</span>
        </div>

    )
}

export default SkillCards