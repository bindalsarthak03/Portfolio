
import styles from '../styles/Projects.module.css'
import Pdata from "./Pdata"
import Odata from "./Odata"
import OProjectCard from "./OProjectCard"
import ProjectCard from "./ProjectCard"
const Projects = () => {
    return (
        <div  data-aos="fade-up" id="projects" className={styles.container} >
            <div className={styles.heading}>Projects</div>
            <p className={styles.category}>Featured</p>
            <div className={styles.projectCard}>
                {Pdata.map((val) => {
                    return (
                        <div key = {val.id}>
                        <ProjectCard  url={val.url} imgsrc={val.imgsrc}
                            title={val.title}
                            desc={val.desc}
                        />
                        </div>
                    );
                })}
            </div>
            <p className={styles.category}>Other Projects</p>
            <div  className={styles.OprojectCard}>
                {Odata.map((val) => {
                    return (
                        <div key = {val.id}>
                        <OProjectCard url={val.url} title={val.title}
                            stack={val.stack}
                            desc={val.desc}
                        />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Projects