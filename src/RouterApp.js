import React from 'react'
import Nav from './Nav'
import About from './about'
import Shop from './shop'
import './Apps.css'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
function App (){
    return(
        <div>
            
        <Router>
        <div>
        <Nav />
           <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/about" component={About}/>
           
           <Route path="/shop" component={Shop}/>
           </Switch>
        </div>
        </Router>
        <div className="bottom">
        <h3>This is footer</h3>
        </div>
    </div>
    )
}

const Home=()=>{
    return(
    <div>
        <h1>Home Page</h1>
    </div>)
}
export default App