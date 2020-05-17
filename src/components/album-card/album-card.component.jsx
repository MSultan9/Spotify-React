import React from 'react';
import logo from '../../logo.svg'
import './album-card.styles.css'

const AlbumCard = ({ item }) => {
    const image = item.images.length > 0 ? item.images[1].url : logo;

    return (
        <div className="album-card">
            <img src={image} alt={item.name} />
            <div className="title">{item.name}</div>
            <div className="album-artists">{item.artists.map(artist => <span key={artist.id}>{artist.name}</span>)}</div>
            <div className="release-date">{item.release_date}</div>
            <div>{item.total_tracks} track(s)</div>
            <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer">Preview On Spotify</a>
        </div>
    )

}

export default AlbumCard;