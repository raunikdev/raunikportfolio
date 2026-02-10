import './css/Footer.css'
const Footer=()=>{
    const year = new Date().getFullYear();
    return(
        <footer>
            <div className="main-footer">
                <div className="left-footer">
                    <h2><span class="portfolio-header-foot">Portfolio-</span>Raunik</h2>
                    <div className="defination-wrap">
                        <p className="defination">I am a student in 3rd Year, with a cgpa of 7 in GGSIPU, East Campus. I have learned some skills like Html, Css, JavaScript and React. I am an Intern at Ampcus Tech as a Full-Stack Developer Intern.</p>
                    </div>
                </div>
                <div className="right-footer">
                    <ul className="foot-ul">
                        <li className="foot-li-main">Main Pages:</li>
                        <li className="foot-li"><a href="#Home">Home</a></li>
                        <li className="foot-li"><a href="#Projects">Projects</a></li>
                        <li className="foot-li"><a href="#Contact">Contact</a></li>
                        <li className="foot-li"><a href="/About">About</a></li>

                    </ul>
                </div>
                
                <div className="right-footer">
                    <ul className="foot-ul">
                        <li className="foot-li-main">Projects:</li>
                        <li className="foot-li"><a target="_blank" href="https://raunikdev.github.io/EduVidwan/">EduVidwan</a></li>
                        <li className="foot-li"><a target="_blank" href="https://raunikdev.github.io/blog/index.html">CourseThink</a></li>
                        <li className="foot-li"><a target="_blank" href="/">PortFolio</a></li>
                        {/* <li class="foot-li"><a href="#About"></a></li> */}

                    </ul>
                </div>
            </div>
            <div className="copyright"><div></div><p>&copy; {year} All Rights Reserved</p></div>
        </footer>
    )
}
export default Footer;