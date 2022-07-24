import React from 'react';
import '../css/mobileModal.css';
import { graduation, super8Logo } from "../images";

export const MobileModal = () => {

    return(
        <div className='mobileModal'>
            <img className='circularPhoto' src={super8Logo} alt={'home image'}/>
            <h1>Hello</h1>
            <h3>For the best experience on this site, please check it out on your computer</h3>
        </div>
    )
}
