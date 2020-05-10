import React, { createContext, useState } from 'react';

export const ArtistsContext = createContext(
    {
        savedArtists: []
    }
);


const ArtistsProvider = ({ children }) => {
    const [savedArtists, setArtists] = useState([])

    const addArtists = savedArtists => setArtists(savedArtists)
    return <ArtistsContext.Provider value={{ savedArtists, addArtists }}>{children}</ArtistsContext.Provider>
}

export default ArtistsProvider