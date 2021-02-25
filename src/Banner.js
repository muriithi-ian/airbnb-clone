import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import './Banner.css'

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <h1>Show date picker</h1>}
                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    variant="outlined"
                    className="banner__searchButton">Search Dates</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind getaway and uncover the hidden gems near you.
                </h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>

        </div>
    )
}

export default Banner
