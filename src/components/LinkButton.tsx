import React from 'react';
import '../css/linkButton.css';

interface LinkButtonProps{
    link:string | undefined;
    className:string;
    label:string;
}

export const LinkButton:React.FC<LinkButtonProps> = ({link,className,label}) => {

    return(
        <div className={`linkButton ${className}`} onClick={() => window.open(link)}>
            <p>{label}</p>
        </div>
    )
}
