import React, { Component } from 'react'
import Input from './Components/Input/Input'
import Output from './Components/Output/Output'

export class App extends Component {

  // now creating a state

  state = {
    user : [
      {username: "Hauwa"}
    ]
  }

  // Introducing an event handler 

    changeNameHandler = (e) =>
      this.setState ({
        user : [
          {username: e.target.value}
        ]
      })

    render() {
    return (
      <div>
        <div>
          <Input change = {this.changeNameHandler} name = {this.state.user[0].username} />
          {/* Using state with my output type */}
          <Output name = {this.state.user[0].username} />
        </div>
      </div>
    )
  }
}

export default App
