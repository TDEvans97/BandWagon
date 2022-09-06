import React from 'react'
import './style.css'

const ArtistCardFan = () => {
    return (
        <>
            <div className='artistCard container'>
                This is the artist card component
                {/* The fanbase button should direct to the correct artistBandwagon */}
                <a href='/fanbase'> 
                    <button>Go to this bandwagon</button>
                </a>
            </div>
        </>
    )
}

export default ArtistCardFan;