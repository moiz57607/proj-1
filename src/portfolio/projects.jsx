import React from "react";
import Sdata from "./Sdata";
import Ititans from './;roj-1.png';
import College from "./college.png";
import Watch from "./watch.png"
const Projects = () =>{
    return(
  <>
<div className="Projects container-fluid">
<h1 className="text-center mt-4">Projects</h1>
<hr className="w-50 m-auto" />
 <div className="services-main d-flex justify-content-center text-center p-5 gap-5 ms-0 me-0 row">
 <Sdata img={Ititans} 
 title='Ititans Clone'
 link="https://www.yahoobaba.net/codelab"  val="visit"
 clas="project-button"
 />
 <Sdata img={College} 
 title='college website'
 link="https://moiz57607.github.io/college-website/"
 val="visit" 
  clas="project-button"
 />


 <Sdata img={Watch} 
 title='Watch Website'
 link="https://moiz57607.github.io/watch-website-with-UI/"  val="visit"
 clas="project-button" />

 </div>
 </div>
  </>
    )
};
export default Projects;