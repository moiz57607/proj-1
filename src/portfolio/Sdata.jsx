import React from "react";
function Sdata(props){
    return(
        <>
            
 <div className="card col-lg-3 col-sm-12 p-0">
  <img src={props.img} class="card-img-top" alt="..." />
  <div class="card-body">
  <h3>{props.title}</h3>
    <p className="card-text p-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={props.link} alt="" target="_blank" className={props.clas}   >
    {props.val}
    </a>
  </div>
</div>


        </>
    )
}

export default Sdata;