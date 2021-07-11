import React from 'react';
import '../css/detailsComponent.css';
import {getImage, getButtons, getCompany, getTitle, getTime} from "./contentConfig";
import {LinkButton} from "../components";

interface DetailsComponentProps{
    title: String;
}

export default function DetailsComponent(props:DetailsComponentProps){
const buttons:Array<{label:string,className?:string,link?:string}> = getButtons(props.title);

    return(
        <div className='detailsComponent'>
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
                    <h5>{getTime(props.title)}</h5>
                </div>
                <div className='playtimeContainer'>
                    <p className='promptText'>PLAYTIME:</p>
                    <h5>{getTime(props.title)}</h5>
                </div>
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