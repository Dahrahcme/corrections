import React, { Component } from 'react'
import Input from './Components/Input/Input'
import Output from './Components/Output/Output'

export class App extends Component {
    render() {
    return (
      <div>
        <div>
          <Input />
          <Output />
        </div>
      </div>
    )
  }
}

export default App