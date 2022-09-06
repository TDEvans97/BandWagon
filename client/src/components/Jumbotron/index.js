import React from 'react'
import './style.css'
import BandwagonLogo from '../../assets/bandwagon.png';

const Jumbotron = () => {
    return (
        <>
            <div className='jumbotron'>
                <figure className='imgFigure'>
                    <img src={BandwagonLogo} alt='Bandwagon logo of instruments in a wagon.' className='BWlogo' />
                </figure>
                <figure className='textFigure'>
                    <h2>Welcome to Bandwagon</h2>
                    <h2>A social network for hundreds of artists’ fanbases.
                        Want to join a community of die-hard fans?</h2>
                    <a href='/login'>
                        <button className='BWBtn'>
                            Hop on the Bandwagon!
                            </button>
                            </a>
                </figure>
            </div>
        </>
    )
}

export default Jumbotron;