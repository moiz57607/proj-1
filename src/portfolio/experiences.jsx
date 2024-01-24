import React from "react";
// const Experiences = () =>{
//     return(
//     <>
//     <h1 className="text-center mt-3">Experiences</h1>
//     <hr className="w-50 m-auto" />
//      <div className="mt-5 experience-main">
//      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
//   <div className="carousel-inner">
//  {/* webdevelopment */}
//  <div className="container-fluid">
//     <div className="carousel-item active d-flex justify-content-center align-content-center row">
//     <div className="col-lg-6 col-sm-12">
//     <img src="https://static9.depositphotos.com/1559686/1228/i/950/depositphotos_12286955-stock-photo-technology-in-the-hands.jpg" 
//       className="d-block w-100" alt="..." />
//         <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
//     </div>
//       <div className="col-lg-6 col-sm-12 teaching">
//       <h1>Web Development</h1>
//       <p className="w-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//       </div>
//     </div>
// </div>
//   {/* teaching */}
//     <div className="carousel-item d-flex container-fluid">
// <div className="row">
//     <div className="col-lg-6">
//     <img src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//        class="d-block w-100" alt="..." />
//          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//     </div>
//     <div className="col-lg-6 teaching">
//       <h1>Teaching</h1>
//       <p className="w-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//       </div>
// </div>
//     </div>

//   </div>
// </div>        
//      </div>
//     </>
//     );
// }
// export default Experiences;
const Experiences = () =>{
  return(
    <>
   <div className="container-fluid ">
   <h1 className="text-center mt-5 mb-5">Experiences</h1>
   <hr className="w-50 m-auto mb-5" />
   <div className="row ">
   
   <div id="carouselExampleFade" class="carousel slide carousel-fade col-lg-6" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://media.istockphoto.com/id/1456339578/photo/developing-programming-and-coding-technologies-professional-developer-programmer-cooperation.jpg?s=1024x1024&w=is&k=20&c=w1UASpIaHsVZ6WkBF1b7vKatyOT652BxX0X1eLfDcR0=" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://static9.depositphotos.com/1559686/1228/i/950/depositphotos_12286955-stock-photo-technology-in-the-hands.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      <div className="col-lg-6 teaching ">
      <h1>Web Development</h1>
      <p className="w-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>     </div>
</div>

</div>


    </>
  )
}
export default Experiences;