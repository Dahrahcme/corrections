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

    render() {
    return (
      <div>
        <div>
          <Input />
          {/* Using state with my output type */}
          <Output name ={this.state.user[0].username} />
        </div>
      </div>
    )
  }
}

export default App
