import React, { useContext, useState } from 'react';
import InputSearch from '../../components/input-search/input-search.component'
import CardsList from '../../components/cards-list/cards-list.component'
import { AccessTokenContext } from '../../providers/access-token.provider'

const ArtistsPage = () => {
    const { token } = useContext(AccessTokenContext)
    const [artists, setArtists] = useState([]);

    function searchArtists(e) {
        e.preventDefault()
    }

    function search(e) {
        fetch(`https://api.spotify.com/v1/search?q=${e.target.value}&type=artist`,
            { headers: { 'Authorization': `Bearer ${token}` } })
            .then((response) => {
                if (response.ok)
                    response.json().then((data) => {
                        setArtists(data.artists.items)
                    })
            })
    }
    return (
        <div className="center-container">
            <InputSearch handleSubmit={searchArtists} handleTyping={search} />
            <CardsList list={artists} type={"artist"} />
        </div>

    );
}

export default ArtistsPage;