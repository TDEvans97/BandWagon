import React from 'react';
import ArtistCardFan from '../components/ArtistCardFan';

const BandwagonDashboard = () => {
    return (
        <div>
            This is the bandwagon dashboard. It has all of the user's bandwagons with buttons to direct to their mediapage.
            <ArtistCardFan />
        </div>
    )
}

export default BandwagonDashboard;