import React from 'react'
import './popup.styles.css'

const Popup = ({ handleClick }) => (
    <div className="modal-container">
        <div className="modal">
            <div>Your Token has expired please return home to retrieve a new one</div>
            <button onClick={handleClick}>Return Home</button>
        </div>
    </div>
)

export default Popup;