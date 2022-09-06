import React from 'react'
import './style.css'

const ArtistCard = () => {
    return (
        <>
            <div className='artistCard container'>
                This is the artist card component
                {/* Create an anchor that adds this bandwagon to the signin user's bandwagon array. Upon clicking, it should say Joined! */}
                <button>Join this bandwagon</button>
            </div>
        </>
    )
}

export default ArtistCard;