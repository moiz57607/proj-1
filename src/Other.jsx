import React from "react";
import Card from "./s-data";
import but from "./but";

const Other =() =>{
    return (
        <Card
        key = {but[1].key}
        imgsrc={but[1].imgsrc}
         tittle={but[1].tittle}
         sname={but[1].sname}
       />
    );
    }
    export default Other;