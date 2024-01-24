import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="cards">
          <div className="card-info">
            <img src={props.imgsrc} alt="" className="card-img" />
            <span className="card-catagory">{props.tittle}</span>
            <h3 className="card-tittle">{props.sname}</h3>
            <a href="https://www.yahoobaba.net/" target="blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
