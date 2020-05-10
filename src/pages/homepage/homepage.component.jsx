import React, { useContext, useEffect } from 'react';
import './homepage.styles.css'
import LoginButton from '../../components/login-button/login-button.component'
import { AccessTokenContext } from '../../providers/access-token.provider'

const HomePage = ({ history }) => {

    const { addToken } = useContext(AccessTokenContext)
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const clientId = 'd2783e20fd504880a0511a7e59d0b3cb';
    const redirectUri = 'http://localhost:3000/callback/';

    useEffect(() => {
        if (getHashParams().access_token) {
            addToken(getHashParams().access_token)
            history.push("/artists");
        }
    }, [])

    function getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ((e = r.exec(q))) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    function Login() {
        window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
    }

    return (
        <div className="center-container">
            <LoginButton handleClick={Login} />
        </div>
    );
}

export default HomePage;