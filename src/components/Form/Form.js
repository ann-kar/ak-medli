import React from "react";

import "./Form.scss";

function Form() {

    const buttonHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="Form">
            <h4 className="Form__info">Try Medli for free</h4>
            <form  className="Form__main">
                <input className="Form__main__input" type="email" placeholder="Enter your email" />
                <button onClick={(e) => buttonHandler(e)} className="Form__main__button">Get started</button>
            </form>
        </div>
    )
}

export default Form;