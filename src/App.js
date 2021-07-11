import React, {useState,useEffect} from 'react';
import { useHistory,useLocation,Route,Router,Switch } from 'react-router-dom';
import './App.css';
import {DetailsCard, DetailsComponent, RecordCrateComponent} from "./components";

function App() {
    const records = ['Scratch','Playwriting','Graduation','Attic Band','Crate Digger','Thesis','KPISS', 'Super 8','Quio','Beatitude'];
    const [selectedItem,setSelectedItem] = useState(100);
    const [lastSelectedItem,setLastSelectedItem] = useState(0);
    const [showDetails,setShowDetails] = useState('');

    useEffect( () =>{
        if(selectedItem !== 100){setLastSelectedItem(selectedItem);}
    },[selectedItem]);


    const getYPos = (id:number) => {
        return (id * 40) + (vh / 4);
    }

    const getYear = () => {
        return new Date().getFullYear().toString();
    };

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    let history = useHistory();

    return (
        <div className="App">
            <header className="App-header">
                {/*{showDetails === '' ? */}
                    <RecordCrateComponent records={records} selectedItem={selectedItem} setSelectedItem={setSelectedItem} history={history} showDetails={showDetails} setShowDetails={setShowDetails} lastSelectedItem={lastSelectedItem}/>
                    <DetailsCard className={showDetails !== '' ? 'fade-in-card detailsComponentTop' : 'cardHidden'} title={showDetails}/>
                {/*:*/}
                {/* <DetailsComponent title={showDetails} setShowDetails={setShowDetails} setSelectedItem={setSelectedItem} selectedItem={selectedItem}/>}*/}
            </header>
            <h5 className='bottomCredits' >{`© ${getYear()} Jack Bauman  - All rights reserved`}</h5>
        </div>
    );
}

export default App;
