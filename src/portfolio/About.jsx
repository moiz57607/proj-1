import React from "react";
import but from "./but"
const About = () =>{
    return(
        <>
        <h1 className="text-center">About Me</h1>
        <hr className="w-50 m-auto" />
        <h2 className="text-center">SKILLS</h2>
       <div className="d-flex justify-content-center p-5 ">
       {
        but.map((val,ind)=>{
            return(
       <div className="card col-lg-4 about me-4" >
                <>

                <img src={val.imgsrc} class="card-img-top Skills-img" alt="..." />
  <div className="card-body text-center">
    <h5 className="card-title">{val.tittle}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn  skills-btn">Go somewhere</a> */}
</div>

                </>
  </div>
            )
        })
       }

</div>
       
        </>
    )
};
export default About;