import React from 'react';
import '../css/linkButton.css';

interface LinkButtonProps{
    link:string;
    className:string;
    label:string;
}

export default function LinkButton(props:LinkButtonProps){

    return(
        <div className={`linkButton ${props.className}`} onClick={() => window.open(props.link)}>
            <p>{props.label}</p>
        </div>
    )
}