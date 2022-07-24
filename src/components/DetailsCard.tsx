import React from 'react';
import '../css/detailsComponent.css';
import {LinkButton} from "./LinkButton";
import { DetailsButton, RoleDetails, Roles } from '../types';
import {ROLE_COLLECTION} from '../config/contentConfig'

interface DetailsCardProps{
    title: Roles;
    className:any;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({ title, className }) => {
const config:RoleDetails = ROLE_COLLECTION[title]

    return(
        <div className={`detailsComponent ${className}`}>
            <div className='companyContainer'>
                <p className='promptText'>COMPANY:</p>
                <h5>{config?.company}</h5>
            </div>
            <div className='roleContainer'>
                <p className='promptText'>ROLE:</p>
                <h3>{config?.title}</h3>
            </div>
            <div className='timeContainer'>
                <div className='playtimeContainer'>
                    <p className='promptText'>YEARS:</p>
                    <h5>{config?.yearsActive}</h5>
                </div>
                <div className='playtimeContainer'>
                    <p className='promptText'>TIME:</p>
                    <h5>{config?.duration}</h5>
                </div>
            </div>
            <div className='roleContainer'>
                <p className='promptText'>LINER NOTES:</p>
                <h5>{config?.notes}</h5>
            </div>
            <div className='roleContainer'>
                <p className='promptText'>ALBUM ART:</p>
                <h5>{config?.image}</h5>
            </div>
             <div className='buttonContainer'>
                    {config?.buttons.map((buttonItem:{label:string,className?:string,link?:string}) => {
                        return <LinkButton
                            className={buttonItem.className + (config.buttons.length > 1 ? ' linkDouble' : ' linkSingle')}
                            label={buttonItem.label} link={buttonItem.link}/>;
                    })}
                </div>

        </div>
    )
}
