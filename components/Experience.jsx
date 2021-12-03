import React from 'react'
import styles from '../styles/Experience.module.css'
import ExpCard from './ExpCard.jsx'
import Edata from './Edata'
const Experience = () => {
    return (
        <div id='exp' data-aos="fade-up" className={styles.container}>
            <p className={styles.heading}>Experience</p>
            <div className={styles.langcard}>
                            {Edata.map((val) => {
                                return (
                                    
                                    <ExpCard key = {val.id} imgsrc={val.imgsrc}
                                        title={val.title}
                                        desc={val.desc}
                                    />
                                    
                                );
                            })}
                        </div>
        </div>
    )
}

export default Experience
