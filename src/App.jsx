
import React from "react";
// import Card from "./s-data";
// import but from "./but";
import Netflix from "./Tom";
import Other from "./Other";
const Favseries = "moiz";
// const Fav =() =>{
// if (Favseries === "Netflix") {
//     return (
//       <Netflix />
//     );
// } else {
//     return (
//      <Other />
//     );
// }
// };
const App = () => (
<>
<h1>list of five top Series</h1>
{/* <Fav /> */}
{Favseries === "Netflix"? <Netflix />:<Other />}
</>
)
export default App;