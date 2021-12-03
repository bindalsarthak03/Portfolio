import Image from 'next/image'
import styles from '../styles/ExpCard.module.css'


function ExpCard (props){
    return (
        
        <div className={styles.container}>
            
                    <Image className={styles.Image} src={props.imgsrc} height={'90'} width={'245'} layout={'fixed'} />
            <div className={styles.about}>
                <span className={styles.card_category}>{props.title}</span>
                <span className={styles.desc}>{props.desc}</span>
            </div>
        </div>

        
    )
}

export default ExpCard