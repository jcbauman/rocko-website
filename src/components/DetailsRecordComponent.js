import React from 'react';
import {
    recordSleeve,
} from "../images";
import {getImage} from '../config/contentConfig';
import '../css/recordSleeve.css';
import '../css/detailsComponent.css';

interface RecordComponentProps{
    title: String;
    id: number;
}

export default function DetailsRecordComponent(props:RecordComponentProps){

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const getHeight = (id:number) => {
       return (id * (.05 * vh)) + 20;
    }

    const getZIndex = (type:'image' | 'grit',id:number) => {
        if(type === 'image'){
            return id === 0 ? 1 : id * 5;
        } else {
            return id === 0 ? 2 : (id * 5 )+1;
        }
    };



    return(
        <div className={`recordContainer`} style={{top:getHeight(props.id),zIndex:getZIndex('image',props.id),left:500}} >
            <img className={`recordImage`} src={getImage(props.title)} alt={props.title}/>
        </div>
    )
}