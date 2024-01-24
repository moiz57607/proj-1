import React from "react";
// const Skills = () =>{
// return(
//     <>
//     <div className="second-main container-fluid">
//         <h2 className="text-center ">Skills</h2>
//         <div className="second-background row">
//         <div className="card col-lg-4 col-sm-12">
//   <img src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/vUuUtKqDrY9gAbaD2czK9KrN" class="card-img-top Skills-img" alt="..." />
//   <div className="card-body text-center">
//     <h5 className="card-title">HTML</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn  skills-btn">Go somewhere</a>
//   </div>
// </div>
//         <div className="card col-lg-4 col-sm-12">
//   <img src="https://blog.logrocket.com/wp-content/uploads/2023/01/css-full-page-background.png" class="card-img-top Skills-img" alt="..." />
//   <div className="card-body text-center">
//     <h5 className="card-title">CSS</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn  skills-btn">Go somewhere</a>
//   </div>
// </div>
//         <div className="card col-lg-4 col-sm-12">
//   <img src="https://as1.ftcdn.net/v2/jpg/02/14/87/96/1000_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg" class="card-img-top Skills-img" alt="..." />
//   <div className="card-body text-center">
//     <h5 className="card-title">JAVASCRIPT</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn  skills-btn">Go somewhere</a>
//   </div>
// </div>
//         </div>
//         </div>
//     </>
// )
// }
// export default Skills
import Sdata from "./Sdata";
const Skills = () =>{
return(

<div data-aos="fade-up"
     data-aos-duration="3000">

<div className=""  >
<h1 className="text-center mt-4">Skills</h1>
<hr className="w-50 m-auto" />
 <div className="services-main d-flex justify-content-center text-center p-5 gap-5 ms-0 me-0 row">
 <Sdata img="https://community-cdn-digitalocean-com.global.ssl.fastly.net/vUuUtKqDrY9gAbaD2czK9KrN"
  title='HTML'/>
 <Sdata img="https://blog.logrocket.com/wp-content/uploads/2023/01/css-full-page-background.png"
  title=' CSS'/>
 <Sdata img="https://as1.ftcdn.net/v2/jpg/02/14/87/96/1000_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg"
 title='JAVASCRIPt'/>
 </div>
 </div>
</div>
)
}
export default Skills;