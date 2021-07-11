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
    history:any;
    setShowDetails:any;
    lastSelectedItem:any;
}

export default function RecordCrateComponent(props:RecordCrateProps){
    const{records,selectedItem,setSelectedItem,history,setShowDetails,lastSelectedItem} = props;
    const getYPos = (id:number) => {
        return (id * 40) + (vh / 4);
    };
    const handleClickArrow = () => {
        setShowDetails(records[selectedItem]);
    };

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    return(
        <div className='recordBin'>
            {records.map((title: String, index) =>
                (<RecordComponent key={`${title}-record`} title={title} id={index}
                                  selectedRecord={selectedItem} setSelectedRecord={setSelectedItem}/>)
            )}
            {<img className={`rightArrow ${selectedItem === 100 ? 'rightArrowHidden' : ''}`}
                  onClick={handleClickArrow} src={rightArrow} alt='right arrow'
                  style={{top: getYPos(selectedItem === 100 ? lastSelectedItem : selectedItem)}}/>}
        </div>
    )
}