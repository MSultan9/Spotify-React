import React from 'react'
import './input-search.styles.css'

const InputSearch = ({ handleSubmit, handleTyping }) => (
    <form onSubmit={handleSubmit}>
        <span className="icon"> &#128269;</span>
        <input type="text" placeholder="Search for an artist..." onChange={handleTyping} />
    </form>
)

export default InputSearch