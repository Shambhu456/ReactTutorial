//Lists
//Lists
import React, { Component } from 'react'

export default class Apps extends Component {

    state = {
        users: [
            {id:101, name:"Shambhu",password:"3423ssdf"},
            {id:102, name:"Abhimanyu",password:"3424ssdf"},
            {id:103, name:"Manish",password:"3425ssdf"}
        ],
        isLoggedIn: false
    }


    render() {
      const newUsers = this.state.users.map((user)=>{
          console.log(user)
      return <h1 key={user.id}>ID : {user.id}</h1>
      })
        return (
        <div>{newUsers}</div>
          //<div>
            //  <h1>{this.state.users[0].id}</h1>
          //</div>
        )
    }
}
