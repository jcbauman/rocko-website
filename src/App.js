import React, {useState,useEffect} from 'react';
import './App.css';
import {DetailsCard, MobileModal, RecordCrateComponent} from "./components";
import {rockoTitleCard} from "./images";

function App() {
    const records = ['Scratch','Playwriting','Graduation','Attic Band','Crate Digger','Thesis','KPISS', 'Super 8','Quio','Beatitude'];
    const [selectedItem,setSelectedItem] = useState(100);
    const [lastSelectedItem,setLastSelectedItem] = useState(0);
    const [showDetails,setShowDetails] = useState('');

    useEffect( () =>{
        if(selectedItem !== 100){setLastSelectedItem(selectedItem);}
    },[selectedItem]);

    const getYear = () => {
        return new Date().getFullYear().toString();
    };

    return (
        <div className="App">
            <MobileModal/>
            <div className='titleCard'>
                <img className='titleCardImg' src={rockoTitleCard} alt='rocko title'/>
            </div>
            <header className="App-header">
                <RecordCrateComponent records={records} selectedItem={selectedItem} setSelectedItem={setSelectedItem} showDetails={showDetails} setShowDetails={setShowDetails} lastSelectedItem={lastSelectedItem}/>
                <DetailsCard className={showDetails !== '' ? 'fade-in-card detailsComponentTop' : 'cardHidden'} title={showDetails}/>
            </header>
            <h5 className='bottomCredits' >{`© ${getYear()} Jack Bauman`}</h5>
        </div>
    );
}

export default App;
