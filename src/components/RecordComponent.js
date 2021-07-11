import React from 'react';
import {
    recordSleeve,
} from "../images";
import {getImage} from '../components/contentConfig';
import '../css/recordSleeve.css';

interface RecordComponentProps{
    title: String;
    id: number;
    setSelectedRecord: any;
    selectedRecord: number;
}

export default function RecordComponent(props:RecordComponentProps){


    const getHeight = (id:number) => {
        return (id * 40) + 20;
    }

    const getZIndex = (type:'image' | 'grit',id:number) => {
        if(type === 'image'){
            return id === 0 ? 1 : id * 5;
        } else {
            return id === 0 ? 2 : (id * 5 )+1;
        }
    };

    const onClickHandler = (id:number) => {
        if(props.selectedRecord === id){
            props.setSelectedRecord(100);
        } else {
            props.setSelectedRecord(id);
        }
    }


    return(
        <div className={`recordContainer ${(props.id > props.selectedRecord) ? 'recordTipped' : ''}`} style={{top:getHeight(props.id),zIndex:getZIndex('image',props.id)}} onClick={() => onClickHandler(props.id)}>
            <img className={`gritCover`} style={{zIndex:getZIndex('grit',props.id)}} src={recordSleeve} alt=""/>
            <img className={`recordImage`} src={getImage(props.title)} alt={props.title}/>
        </div>
    )
}