import React, { useContext, useEffect, useState } from 'react';
import './cards-list.styles.css'
import ArtistCard from '../artist-card/artist-card.component'
import AlbumCard from '../album-card/album-card.component'
import { AccessTokenContext } from '../../providers/access-token.provider'
import { withRouter } from 'react-router-dom'

const CardsList = ({ list, type, match }) => {
    const { token } = useContext(AccessTokenContext)
    const id = match.params.id
    const [artist, setArtist] = useState("");

    useEffect(() => {
        if (type === 'album')
            fetch(`https://api.spotify.com/v1/artists/${id}`,
                { headers: { 'Authorization': `Bearer ${token}` } })
                .then((response) => {
                    if (response.ok)
                        response.json().then((data) => {
                            setArtist(data.name)
                        })
                })
    }, [id, token, type])

    return (
        <div>
            {type === 'album' ? <div><h1>{artist}</h1> <h3>Albums</h3> </div> : null}
            <div className="cards-container">
                {list.map(item => type === 'artist'
                    ? <ArtistCard key={item.id} item={item} allArtists={list} />
                    : <AlbumCard key={item.id} item={item}></AlbumCard>)}
            </div>
        </div>
    )
}

export default withRouter(CardsList);