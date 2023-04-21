import React from 'react';
import {Tilt} from 'react-tilt';
import brain from './brainstorm.png';
import './logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 80}} style = {{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop: '1px'}} alt='logo' src={brain}/></div>
            </Tilt>
        </div>
    );
}

export default Logo;