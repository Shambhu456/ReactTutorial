//Functional Component
//Prevent default can be used to prevent the default function
import React from "react";

function Event(props) {
  function handleClick(e) {
    //window.location = "https://www.youtube.com/";
    e.preventDefault();
  }
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <a href="https://www.youtube.com/" onClick={handleClick}>
        Click Me
      </a>
    </div>
  );
}

export default Event;
