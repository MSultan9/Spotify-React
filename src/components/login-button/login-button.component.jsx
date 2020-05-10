import React from 'react';
import './login-button.styles.css'

const LoginButton = ({ handleClick }) => (
    <button className="login-button" onClick={handleClick}>Login with Spotify</button>
)

export default LoginButton