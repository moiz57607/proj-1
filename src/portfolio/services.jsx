import React from "react";
import Sdata from "./Sdata";
const Services = () =>{
return(

<>

<div   data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="services ">
<h1 className="text-center mt-4">Services</h1>
<hr className="w-50 m-auto" />
 <div className="services-main d-flex justify-content-center text-center p-5 gap-5 ms-0 me-0 row">
 <Sdata img='https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?w=740&
 t=st=1706004977~exp=1706005577~hmac=99d7868a6cec18c74dff09aabfc6d4519d86540bcc7d966921fe780c53551807'
  title='Front End'/>
 <Sdata img='https://media.istockphoto.com/id/1189378904/vector/mobile-apps-creation-of-a-mobile-application-web-page-created-from-separate-blocks-user.jpg?s=1024x1024&w=is&k=20&c=GSTXjWCmhYnK-8vfd3ZoJnXF4RCOzkoRH5tw9sfpMQw=' title=' UI Design'/>
 <Sdata img='https://acropolium.com/img/articles/find-backend-developers/img01.jpg'
 title='Back End'/>
 </div>
 </div>
</>
)
}
export default Services;