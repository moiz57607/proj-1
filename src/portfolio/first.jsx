import React from "react";
import Header from "./header";
import  moiz from "../profile.jpeg"
const First = () =>{
return(
    <>
     
        <div className="col-lg-6 col-sm-12  first-main" id="about"
        >
       <div className="Academics-content container-fluid" data-aos="fade-up"
     data-aos-duration="3000">
        <Header />

        <div className="d-flex justify-align-content-around row">
        <div className="first-content col-lg-6 col-sm-12">
        <h2 >Abdul Moiz</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
           
            <div class="box-pic col-lg-6 col-sm-12">
              <img src={moiz} alt="" />
            </div>
          
       </div>

        </div>
        </div>
    </>
)
}
export default First
