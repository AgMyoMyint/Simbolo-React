import React from 'react'

const Header = ({title, description}) => {
    // console.log("typeof props", typeof props);
    // console.log("props", props);
    // let {title, description} = props;
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
        </>
    )
}

export default Header