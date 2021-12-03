
import styles from "../styles/Skills.module.css"
import SkillCards from '../components/SkillCards.jsx'
import Ldata from "./Ldata.jsx"
import Fdata from "./Fdata"
import Tdata from "./Tdata"
const Skills = () => {
    return (
        <div  data-aos="fade-up"  id="skills" className={styles.container}>
            <div className={styles.heading}>
                <p> skills</p>
                <div className={styles.skillsec}>
                    <div className={styles.lang}>
                        <p>languages</p>
                        <div className={styles.langcard}>
                            {Ldata.map((val) => {
                                
                                return (
                                    <SkillCards key={val.id} imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.lang}>
                        <p>frameworks</p>
                        <div className={styles.langcard}>
                            {Fdata.map((val) => {
                                return (
                                    <SkillCards imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                );
                            })}
                        </div>
                    </div> 
                    <div className={styles.lang}>
                        <p>tools</p>
                        <div className={styles.langcard}>
                            {Tdata.map((val) => {
                                return (
                                    <SkillCards imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                );
                            })}
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Skills