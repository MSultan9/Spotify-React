import React from 'react'
import { withRouter } from 'react-router-dom'
import './artist-card.styles.css'

const ArtistCard = ({ item, history }) => {
    const image = item.images.length > 0 ? item.images[1].url : null;
    const stars = Math.round(item.popularity / 20)
    const popularity = new Array(stars).fill(0)

    const redirectAlbum = id => () => history.push(`/artists/${id}`)

    return (
        <div className="artist-card" onClick={redirectAlbum(item.id)}>
            <img src={image} alt={item.name} />
            <div className="title">{item.name}</div>
            <div>{item.followers.total} Followers</div>
            <div className="popularity">{popularity.map((star, index) => <span key={index}>&#x2605;</span>)}</div>
        </div>
    )
}

export default withRouter(ArtistCard)