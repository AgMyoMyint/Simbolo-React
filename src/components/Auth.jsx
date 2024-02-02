import React from 'react'

const Auth = () => {
    let loggedIn = true;
    return (
         loggedIn? <div> Home </div> : <div> Login </div>
    )
}

export default Auth