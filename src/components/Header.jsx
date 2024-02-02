import React, { useState } from 'react'

const Header = ({ title, description }) => {

    let [visible, setVisible] = useState(true);

    function handleClick() {
        setVisible(!visible);
    }

    return (
        <>
            <div className={visible ? '' : 'hide'}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <button
                className="btn btn-primary me-2"
                onClick={handleClick}
            >
                {visible ? "Hide Header" : "Show Header"}
            </button>
        </>
    )
}

            export default Header