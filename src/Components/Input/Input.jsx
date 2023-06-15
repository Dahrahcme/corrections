import React from 'react'

function Input(props) {
  return (
    <div>
      {/* Introducing props to my input and creating a two way binding*/}

        <input type="text" onChange={props.change} value = {props.name} />
    </div>
  )
}

export default Input