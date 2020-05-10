import React, { useContext, useState, useEffect } from 'react'
import { AccessTokenContext } from '../../providers/access-token.provider'
import CardsList from '../../components/cards-list/cards-list.component'

const AlbumsPage = (props) => {

    const { token } = useContext(AccessTokenContext)
    const id = props.match.params.id
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/artists/${id}/albums`,
            { headers: { 'Authorization': `Bearer ${token}` } })
            .then((response) => {
                if (response.ok)
                    response.json().then((data) => {
                        setAlbums(data.items)
                    })
            })
    }, [id, token])

    return (
        <div className="center-container">
            <CardsList list={albums} type={"album"} />
        </div>
    );

}

export default AlbumsPage;