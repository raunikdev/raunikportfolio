import './css/Home.css';
import Profilepic from './images/profile-pic.png';
import Cv from './assets/cv.pdf';
import Linkedin from './images/Linkedin_icon.png';
function Home(){
    return(
        <>
            <div id='Home'>
                <div id='left-home'>
                    
                    <p className="hello">Hi, I am Raunik!</p>
                    <p className="web-developer">
                        <span className='web'>WEB </span> 
                        <span className='developer'>DEVELOPER</span>
                    </p>
                    <p className="description-home">
                        A passionate developer and tech enthusiast who thrives on
                        bringing ideas to life through code. I enjoy building 
                        intuitive web applications, experimenting with AI, and 
                        exploring the latest in technology.                 
                    </p>
                    <div className="buttons-cv">
                        <a href={Cv} target="_blank">
                            <button className="view-cv">View CV</button>
                        </a>
                        <a href={Cv} download >
                            <button className="download-cv">Download CV</button>
                        </a>
                    </div>
                    <div className="social-media-handles">
                        <div className="linkedin">
                            <a href="https://in.linkedin.com/in/raunik-rai-20918128b" target="_blank">
                                <img src={Linkedin} className="socialmedia_icon"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div id='right-home'>
                    <img src={Profilepic} className="profile-pic"></img>
                </div>
            </div>
        </>
    )
}   
export default Home;