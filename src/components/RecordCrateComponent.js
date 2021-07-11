import React from 'react';
import {
    recordSleeve, rightArrow,
} from "../images";
import '../css/recordSleeve.css';
import {RecordComponent} from "./index";

interface RecordCrateProps{
    records:Array;
    selectedItem:any;
    setSelectedItem:any;
    showDetails:any;
    setShowDetails:any;
    lastSelectedItem:any;
}

export default function RecordCrateComponent(props:RecordCrateProps){
    const{records,selectedItem,setSelectedItem,showDetails,setShowDetails,lastSelectedItem} = props;
    const getYPos = (id:number) => {
        return (id * 40) + (vh / 4);
    };
    const handleClickArrow = () => {
        setShowDetails(records[selectedItem]);
    };
    const handleCloseArrow = () => {
        setShowDetails('');
    setTimeout(() => {setSelectedItem(100);}, 500);
    }

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    return(
        <div className='recordBin'>
            {records.map((title: String, index) =>
                (<RecordComponent key={`${title}-record`} title={title} id={index}
                                  selectedRecord={selectedItem} setSelectedRecord={setSelectedItem} chosenRecord={(showDetails !== '' && showDetails === title)} hideRecords={(showDetails !== '' && showDetails !== title)}/>)
            )}
            {<img className={`rightArrow ${selectedItem === 100 || showDetails !== '' ? 'rightArrowHidden' : ''}`}
                  onClick={handleClickArrow} src={rightArrow} alt='right arrow'
                  style={{top: getYPos(selectedItem === 100 ? lastSelectedItem : selectedItem)}}/>}
            {showDetails !== '' ? <img className={`rightArrowDetails turn-opposite-direction`}
                  onClick={handleCloseArrow} src={rightArrow} alt='back arrow'
                  /> : ''}
        </div>
    )
}