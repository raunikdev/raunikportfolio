import arrow from './images/arrow-next-website.jpg'
import './css/Projects.css';
const Projects =(prop)=>{
    return(
        <>
            <div id="" className="project">
                {/* <a href=""><img className="project-image" src={prop.image}></img></a> */}
                <div className="hovercard">
                    <img className="project-image" src={prop.image}></img>
                    <div className="hover-content">
                        <p className="project-heading">{prop.heading}</p>
                        <p className="project-description">{prop.description}</p>
                        <a href={prop.link} target="_blank"><img src={arrow} className="arrow-website"></img></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects;