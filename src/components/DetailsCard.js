import React from 'react';
import '../css/detailsComponent.css';
import {
    getImage,
    getYears,
    getButtons,
    getCompany,
    getTitle,
    getTime,
    getNotes,
    getImageCredits
} from "../config/contentConfig";
import {LinkButton} from "../components";
import {useState, useEffect} from 'react';

interface DetailsCardProps{
    title: String;
    className:any;
}

export default function DetailsCard(props:DetailsCardProps){
const buttons:Array<{label:string,className?:string,link?:string}> = getButtons(props.title);


    return(
        <div className={`detailsComponent ${props.className}`}>
            <div className='companyContainer'>
                <p className='promptText'>COMPANY:</p>
                <h5>{getCompany(props.title)}</h5>
            </div>
            <div className='roleContainer'>
                <p className='promptText'>ROLE:</p>
                <h3>{getTitle(props.title)}</h3>
            </div>
            <div className='timeContainer'>
                <div className='playtimeContainer'>
                    <p className='promptText'>YEARS:</p>
                    <h5>{getYears(props.title)}</h5>
                </div>
                <div className='playtimeContainer'>
                    <p className='promptText'>TIME:</p>
                    <h5>{getTime(props.title)}</h5>
                </div>
            </div>
            <div className='roleContainer'>
                <p className='promptText'>LINER NOTES:</p>
                <h5>{getNotes(props.title)}</h5>
            </div>
            <div className='roleContainer'>
                <p className='promptText'>ALBUM ART:</p>
                <h5>{getImageCredits(props.title)}</h5>
            </div>
             <div className='buttonContainer'>
                    {buttons.map((buttonItem:{label:string,className?:string,link?:string}) => {
                        return <LinkButton
                            className={buttonItem.className + (buttons.length > 1 ? ' linkDouble' : ' linkSingle')}
                            label={buttonItem.label} link={buttonItem.link}/>;
                    })}
                </div>

        </div>
    )
}