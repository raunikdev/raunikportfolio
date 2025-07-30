import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import Home from './components/Home.jsx';
import Skills from './components/Skills.jsx';

import Proj1 from './components/images/proj1.png';
import Proj2 from './components/images/proj2.png';
import Proj3 from './components/images/proj3.png';
import Proj4 from './components/images/proj4.png';


import './App.css'

function App() {

  return (
    <>
      <Header />
      <Home/>
      <Skills/>
      <h1 className="project-title" id="projects"> Projects: </h1>
      <div className="projects-app">
        <Projects 
          image={Proj1} 
          link="https://raunikdev.github.io/EduVidwan/"
          heading="EduVidwan" 
          description="An Educational's Wesbite Frontend"/>
        
        <Projects 
          image={Proj2} 
          link="https://raunikdev.github.io/blog/index.html"
          heading="CourseThink" 
          description="A Blogging Website for Collaborator"/>
          
        <Projects 
          image={Proj3} 
          link=""
          heading="Portfolio" 
          description="In Progress..."/>
          
        <Projects 
          image={Proj4} 
          link="https://miniprojects-eight.vercel.app/"
          heading="Mini Projects" 
          description="In Progress..."/>
        <Projects 
          image={Proj1} 
          link=""
          heading="Still Working" 
          description="In Progress..."/>
        <Projects 
          image={Proj1} 
          link=""
          heading="Still Working" 
          description="In Progress..."/>
      </div>
      
      <Footer />
    </>
  )
}

export default App;



// 1. ✅ Portfolio Website
// Features:
// •	Home, About, Projects, Contact pages
// •	Simple animations (using Framer Motion or CSS)
// •	Resume download button
// •	Skills progress bars
// What You'll Learn:
// •	React Router
// •	Component splitting
// •	Responsive layouts (Flexbox/Grid)
