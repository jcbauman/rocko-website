import React from 'react';
import {
    recordSleeve,
} from "../images";
import {getImage} from '../config/contentConfig';
import '../css/recordSleeve.css';

interface RecordComponentProps{
    title: String;
    id: number;
    setSelectedRecord: any;
    selectedRecord: number;
    hideRecords?:boolean;
    chosenRecord?:boolean;
}

export default function RecordComponent(props:RecordComponentProps){


    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const getHeight = (id:number, hideRecords:boolean) => {
        if(props.hideRecords){
            return (id * (.05 * vh)) + 300;
        } else if(props.chosenRecord){
            return 20;
        }
        return (id * (.05 * vh)) + 20;
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
        <div className={`recordContainer ${props.chosenRecord ? 'corner-radius-slow' : 'centerRecord'} ${(props.id > props.selectedRecord && !props.hideRecords) ? 'recordTipped' : ''} ${props.hideRecords ? 'fade-out-grit' : ''}`} style={{top:getHeight(props.id,props.hideRecords),zIndex:getZIndex('image',props.id)}} onClick={() => onClickHandler(props.id)}>
            <img className={`gritCover ${props.chosenRecord ? 'fade-out-grit-slow' : ''}`} style={{zIndex:getZIndex('grit',props.id)}} src={recordSleeve} alt=""/>
            <img className={`recordImage  ${props.chosenRecord ? 'border-radius-slow' : ''}`} src={getImage(props.title)} alt={props.title}/>
        </div>
    )
}