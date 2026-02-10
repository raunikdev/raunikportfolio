import './css/Skills.css';
import JSicon from './images/javascript-icon.png';
import Htmlicon from './images/html-icon.png';
import Cssicon from './images/css-icon.png';
import Reacticon from './images/react-icon.png';
import Nodeicon from './images/node-icon.png';
import Mongodbicon from './images/mongodb-icon.png';
import Mysqlicon from './images/mysql-icon.png';
import Githubicon from './images/github-icon.png';
import Giticon from './images/git-icon.png';
import Pythonicon from './images/python-icon.png';
import Javaicon from './images/java-icon.png';
import Flaskicon from './images/flask-icon.png';
import Bootstrapicon from './images/bootstrap-icon.png';




import react,{useState} from 'react';
const Skills=()=>{
    const frontend = [
        {id: 1,name: "Html", src: Htmlicon, color: "rgba(255, 138, 70, 0.7)"},
        {id: 2,name: "Css", src: Cssicon, color: "rgba(81, 214, 255, 0.41)"},
        {id: 3,name: "JavaScript", src: JSicon, color: "rgba(255, 235, 55, 0.57)"},
        {id: 4,name: "React", src: Reacticon, color: "rgba(55, 248, 255, 0.42)"},
        {id: 5,name: "Bootstrap", src: Bootstrapicon, color: "rgba(201, 143, 255, 0.27)"}

    ]
    const backend = [
        {id: 1,name: "Node", src: Nodeicon, color: "rgba(7, 255, 7, 0.2)"},
        {id: 2,name: "MongoDb", src: Mongodbicon, color: "rgba(81, 255, 139, 0.18)"},
        {id: 3,name: "MySql", src: Mysqlicon, color: "rgba(10, 1, 138, 0.23)"},
        {id: 4,name: "Java", src: Javaicon, color: "rgba(0, 136, 141, 0.42)"},
        {id: 5,name: "Flask", src: Flaskicon, color: "rgba(136, 136, 136, 0.42)"}
        
    ]
    const extra = [
        {id: 1,name: "Github", src: Githubicon, color: "rgba(180, 180, 180, 0.76)"},
        {id: 2,name: "Git", src: Giticon, color: "rgba(255, 81, 81, 0.41)"},
        {id: 3,name: "Python", src: Pythonicon, background: "linear-gradient(135deg, rgba(122, 169, 255, 0.2), rgba(232, 255, 28, 0.2))"},
        // {id: 4,name: "React", src: Reacticon, color: "rgba(55, 248, 255, 0.42)"}
    ]
    const displayfronty = frontend.map(frontend =>
            <div className="skill-all-box">
                <div className="skill-box" style={{
                            backgroundColor: frontend.color}} key={frontend.id}>
                <img 
            src={frontend.src} 
            style={{
                height: "60px",
                width :"60px", 
                }}></img>
            </div><h2>{frontend.name}</h2></div>
            

    )
    const displaybacky = backend.map(backend =>
        <div className="skill-all-box">
            <div className="skill-box" style={{
                        backgroundColor: backend.color}} key={backend.id}>
            <img 
        src={backend.src} 
        style={{
            height: "60px",
            width :"60px", 
            }}></img>
        </div><h2>{backend.name}</h2></div>
         
    )
    const displayextry = extra.map(extra =>
        <div className="skill-all-box">
            <div className="skill-box" style={{
                        background: extra.color || extra.background}} key={extra.id}>
            <img 
        src={extra.src} 
        style={{
            height: "60px",
            width :"60px", 
            }}></img>
        </div><h2>{extra.name}</h2></div>
         
    )


    const displayfront=()=>{
        setSkill(displayfronty);
        setSelectedBtn("frontend");

    }
    const [skill,setSkill] = useState (displayfronty);
    const [selectedBtn, setSelectedBtn] = useState("frontend");

    
    const displayback=()=>{
        setSkill(displaybacky);
        setSelectedBtn("backend");

    }
    const displayextra = () => {
        setSkill(displayextry); 
        setSelectedBtn("extra");
    };

    // const [skill,setSkill] = useState (displayfront);
    

    return(
        <div className='skills' id="Skills">
            <h1 id="skills-heading">Tech Stack</h1>
            <div className="buttons-fbe">
                <button className={`frontend ${selectedBtn === "frontend" ? "selected" : ""}`} onClick={displayfront}>Frontend</button>
                <button className={`backend ${selectedBtn === "backend" ? "selected" : ""}`} onClick={displayback}>Backend</button>
                <button className={`extra ${selectedBtn === "extra" ? "selected" : ""}`} onClick={displayextra}>Extra's</button>

            </div>
            <div className='skills-grid'>
                    {skill}
            </div>
            {/* <div className="progress-bar">
                        <div className="progress"></div>
                        <div className="orange-tip"></div>
                    </div> */}
        </div>
    );
}
export default Skills; 