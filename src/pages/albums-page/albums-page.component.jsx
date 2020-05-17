import React, { useContext, useState, useEffect } from 'react'
import { AccessTokenContext } from '../../providers/access-token.provider'
import CardsList from '../../components/cards-list/cards-list.component'
import Popup from '../../components/popup/popup.component'

const AlbumsPage = (props) => {

    const { token } = useContext(AccessTokenContext)
    const id = props.match.params.id
    const [albums, setAlbums] = useState([]);
    const [next, setNext] = useState(null)
    const [showModal, setModal] = useState(false)

    useEffect(() => {
        let url = `https://api.spotify.com/v1/artists/${id}/albums?&limit=24`
        fetchAlbums(url, token)
    }, [id, token])

    useEffect(() => {
        window.addEventListener('scroll', checkScrollBottom)
        return () => {
            window.removeEventListener('scroll', checkScrollBottom)
        }
    }, [next])

    function fetchAlbums(url, token) {
        fetch(url,
            { headers: { 'Authorization': `Bearer ${token}` } })
            .then((response) => {
                if (response.ok)
                    response.json().then((data) => {
                        setAlbums([...albums, ...data.items])
                        setNext(data.next)
                    })
                else if (response.status === 401)
                    setModal(true)
            })
    }

    function checkScrollBottom() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 1) {
            if (next != null)
                fetchAlbums(next, token)
        }
    }

    function returnHome() {
        props.history.push('/')
    }

    return (
        <div className="center-container">
            <CardsList list={albums} type={"album"} />
            {showModal === true ? <Popup handleClick={returnHome} /> : null}
        </div>
    );

}

export default AlbumsPage;