import React, { useContext, useState, useEffect } from 'react';
import InputSearch from '../../components/input-search/input-search.component'
import CardsList from '../../components/cards-list/cards-list.component'
import Popup from '../../components/popup/popup.component'
import { AccessTokenContext } from '../../providers/access-token.provider'
import { ArtistsContext } from '../../providers/artists.provider'

const ArtistsPage = ({ history }) => {
    const { token } = useContext(AccessTokenContext)
    const { savedArtists } = useContext(ArtistsContext)
    const [artists, setArtists] = useState([]);
    const [showModal, setModal] = useState(false)
    const [next, setNext] = useState(null)

    useEffect(() => {
        setArtists(savedArtists)
    }, [savedArtists])

    useEffect(() => {
        window.addEventListener('scroll', checkScrollBottom)
        return () => {
            window.removeEventListener('scroll', checkScrollBottom)
        }
    }, [next])

    function searchArtists(e) {
        e.preventDefault()
    }

    function checkScrollBottom() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 1) {
            if (next != null)
                fetchArtists(next, token, 'append')
        }
    }

    let delayTimer;
    function search(e) {
        let term = e.target.value
        clearTimeout(delayTimer);
        if (term.trim() !== '')
            delayTimer = setTimeout(() => {
                let url = `https://api.spotify.com/v1/search?q=${term}&limit=24&type=artist`
                fetchArtists(url, token, 'replace')
            }, 1000)
    }

    function fetchArtists(url, token, type) {
        fetch(url,
            { headers: { 'Authorization': `Bearer ${token}` } })
            .then((response) => {
                if (response.ok)
                    response.json().then((data) => {
                        let newArtists = []
                        if (type === 'append')
                            newArtists = [...artists, ...data.artists.items]
                        else if (type === 'replace')
                            newArtists = data.artists.items
                        setArtists(newArtists)
                        setNext(data.artists.next)
                    })
                else
                    throw new Error(response.status)
            }).catch(() => {
                setModal(true)
            })
    }

    function returnHome() {
        history.push('/')
    }

    return (
        <div className="center-container">
            <InputSearch handleSubmit={searchArtists} handleTyping={search} />
            <CardsList list={artists} type={"artist"} />
            {showModal === true ? <Popup handleClick={returnHome} /> : null}
        </div>

    );
}

export default ArtistsPage;