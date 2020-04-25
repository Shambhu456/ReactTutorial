//Composing Components
import React from "react";
//import Student from "./Student"
import StudentP from "./StudentP";
//const App1 = ()=>{
//  return <div>
//    <Student />
//  <Student />
//</div>;
//}
//Using props
const App1 = () => {
  return (
    <div>
      <StudentP name="Shambhu" />
      <StudentP name="Chauhan" />
    </div>
  );
};

export default App1;
