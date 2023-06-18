import React from "react";

const Input = (props) => {
    return (
        <div>
            <input type="text" onChange={props.nameChange} />
        </div>
    );
}

export default Input;
