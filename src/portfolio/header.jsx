import React from "react";
const Header = () =>{
    return(
        <>
            <div>
            <nav className="navbar navbar-expand-lg nav-background mb-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="https://cdn.vectorstock.com/i/1000x1000/09/30/am-logo-monogram-with-shield-shape-isolated-blue-vector-30140930.webp"
        alt="" className="portfolio-logo" />
    </a>
    <button className="navbar-toggler toggler span " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> 
      {/* <span className="navbar-toggler-icon "></span> */}
      <i class="fa-solid fa-caret-down"></i>
    
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active text-dark " aria-current="page" href="#">Home</a>
        <a className="nav-link text-dark " href="#about">About Me</a>
        <a className="nav-link text-dark " href="#">Services</a>
        <a className="nav-link text-dark " href="#">Projects</a>
      </div>
    </div>
  </div>
</nav>
            </div>
        </>
    )
}
export default Header;