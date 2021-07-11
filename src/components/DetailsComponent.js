import React from 'react';
import '../css/detailsComponent.css';
import {DetailsCard, DetailsRecordComponent} from "../components";
import {rightArrow} from "../images";

interface DetailsComponentProps{
    title: String;
    selectedItem:number;
    setShowDetails:any;
    setSelectedItem:any;
}

export default function DetailsComponent(props:DetailsComponentProps){
const {title,selectedItem,setShowDetails,setSelectedItem} = props;

const handleClickArrow = () => {
    setShowDetails('');
    setTimeout(() => {setSelectedItem(100);}, 500);
}
    return(
        <div>
            <DetailsRecordComponent title={title} id={selectedItem}/>
            <img className={`rightArrowDetails`}
                  onClick={handleClickArrow} src={rightArrow} alt='back arrow'
                  />
            <DetailsCard title={title}/>
        </div>
    )
}