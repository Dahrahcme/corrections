import React from "react";

const Input = (props) => {
    return (
        <div>
            <input type="text" onChange={props.nameChange} value={props.name}  />
        </div>
    );
}

export default Input;
