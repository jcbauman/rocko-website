import React from 'react';
import {
    rightArrow,
} from "../images";
import '../css/recordSleeve.css';
import {RecordComponent} from './RecordComponent'
import { Roles } from '../types';

interface RecordCrateProps{
    records:Roles[];
    selectedItem: number;
    closeRecord:() => void
    setSelectedItem:any;
    showDetails:any;
    openRecord:(selection:Roles) => void;
    lastSelectedItem: any;
    isCrateMode:boolean
}

export const RecordCrateComponent: React.FC<RecordCrateProps> = ({records,selectedItem,setSelectedItem,showDetails,openRecord,lastSelectedItem,closeRecord,isCrateMode }) => {
    const getYPos = (id:number) => {
        return (id * 40) + (vh / 4);
    };
    const handleClickArrow = () => {
        openRecord(records[selectedItem]);
    };
    const handleCloseArrow = () => {
        closeRecord()
    setTimeout(() => {setSelectedItem(100);}, 500);
    }

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    return(
        <div className='recordBin'>
            {records.map((title: Roles, index) =>
                (<RecordComponent key={`${title}-record`} title={title} id={index}
                                  selectedRecord={selectedItem} setSelectedRecord={setSelectedItem} chosenRecord={(!isCrateMode && showDetails === title)} hideRecords={(!isCrateMode && showDetails !== title)}/>)
            )}
            {<img className={`rightArrow ${selectedItem === 100 || !isCrateMode ? 'rightArrowHidden' : ''}`}
                  onClick={handleClickArrow} src={rightArrow} alt='right arrow'
                  style={{top: getYPos(selectedItem === 100 ? lastSelectedItem : selectedItem)}}/>}
            {!isCrateMode ? <img className={`rightArrowDetails turn-opposite-direction`}
                  onClick={handleCloseArrow} src={rightArrow} alt='back arrow'
                  /> : ''}
        </div>
    )
}
