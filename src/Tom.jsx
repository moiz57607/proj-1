import React from "react";
import but from "./but";
import Card from "./s-data"

const Netflix =() =>{
return (
    <Card
    key = {but[0].key}
    imgsrc={but[0].imgsrc}
     tittle={but[0].tittle}
     sname={but[0].sname}
   />
);
}
export default Netflix;