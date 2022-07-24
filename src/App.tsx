import {useState,useEffect} from 'react';
import './App.css';
import { DetailsCard } from './components/DetailsCard';
import { MobileModal } from './components/MobileModal';
import { RecordCrateComponent } from './components/RecordCrateComponent';
import { PRIORITY_LIST } from './config/contentConfig';
import {linkedInLogo, rockoTitleCard} from "./images";
import { Roles } from './types';

function App() {
    const [selectedItem,setSelectedItem] = useState(100);
    const [lastSelectedItem,setLastSelectedItem] = useState(0);
    const [showDetails, setShowDetails] = useState<Roles>(Roles.BEATITUDE);
    const [isCrateMode,setIsCrateMode] = useState(true)

    useEffect( () =>{
        if(selectedItem !== 100){setLastSelectedItem(selectedItem);}
    }, [selectedItem]);
    
    const openRecord = (selection:Roles):void => {
        setShowDetails(selection)
        setIsCrateMode(false)
    }

    const closeRecord = ():void => {
        setIsCrateMode(true)
    }

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
                <RecordCrateComponent records={PRIORITY_LIST} selectedItem={selectedItem} setSelectedItem={setSelectedItem} isCrateMode={isCrateMode}  closeRecord={closeRecord} showDetails={showDetails} openRecord={openRecord} lastSelectedItem={lastSelectedItem}/>
                <DetailsCard className={!isCrateMode ? 'fade-in-card detailsComponentTop' : 'cardHidden'} title={showDetails}/>
            </header>
            <h5 className='bottomCredits' >{`© ${getYear()} Rocko Bauman`}</h5>
            <img className='linkedInButton' src={linkedInLogo} alt={linkedInLogo} onClick={()=>window.open('https://www.linkedin.com/in/jackcaseybauman/')}/>
        </div>
    );
}

export default App;
