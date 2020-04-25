//Returning multiple elements
import React from 'react';

class App extends React.Component {
   render() {

    var myStyle = {
        fontSize: 30,
        color: '#FF0000'
     }
      return (
         <div>
            <h1 style={myStyle}>Header</h1>
            <h2>Content</h2>
            <p data-myattribute = "Somevalue">This is the content!!!</p>
         </div>
      );
   }
}
export default App;