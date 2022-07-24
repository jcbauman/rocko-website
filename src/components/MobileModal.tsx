import React from 'react';
import '../css/mobileModal.css';
import { graduation } from "../images";

export const MobileModal = () => {

    return(
        <div className='mobileModal'>
            <img className='circularPhoto' src={graduation} alt={'home image'}/>
            <h1>Hello</h1>
             <h3>The mobile view for this site is in progress...</h3>
            <h3>Please check it out on your computer.</h3>
        </div>
    )
}
