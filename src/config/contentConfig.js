import {
    atticBandAlbum,
    beatitudeLogo, berkeleyRep,
    crateDiggerLogo, graduation,
    kpissRadio, penny,
    quioHealthLogo,
    super8Logo,
    thesisImage
} from "../images";
import React from 'react';

export const getTitle = (role:string) => {
    switch(role){
        case 'Attic Band':
            return 'Concert and Recording Musician';
        case 'Thesis':
            return 'Research Assistant';
        case 'KPISS':
            return 'iOS Developer and Radio DJ';
        case 'Beatitude':
            return 'iOS Developer';
        case 'Crate Digger':
            return 'Android Developer';
        case 'Quio':
            return 'Frontend Developer and iOS Developer';
        case 'Super 8':
            return 'Dir. of Graphic Design, Volunteer Coordinator, & Radio DJ';
        case 'Graduation':
            return 'Graduate';
        case 'Playwriting':
            return 'Playwright'
        case 'Scratch':
            return 'Games Developer'
        default:
            return '';
    }
};

export const getCompany = (role:string) => {
    switch(role){
        case 'Attic Band':
            return 'Attic Band';
        case 'Thesis':
            return 'UCSC Human Computer Interaction Lab';
        case 'KPISS':
            return 'KPISS.fm Radio';
        case 'Beatitude':
            return 'Beatitude';
        case 'Crate Digger':
            return 'Crate Digger';
        case 'Quio':
            return 'Quio Technologies';
        case 'Super 8':
            return 'KZSC Santa Cruz Radio, 88.1FM';
        case 'Graduation':
            return 'University of California, Santa Cruz';
        case 'Playwriting':
            return 'Berkeley Repertory Theater & Others';
        case 'Scratch':
            return 'thevaudevillehouse'
        default:
            return '';
    }
};

export const getButtons = (role:string) => {
    switch(role){
        case 'Attic Band':
            return [{label:'Listen on Spotify', className:'spotifyGreen',link:'https://open.spotify.com/artist/7EBUZ0QFsDLyYKvq7C97BZ?si=gUT2KcHKQZinyxYvLGZMVw&dl_branch=1'},{label:'Listen on Apple Music', className:'appleMusicRed',link:'https://music.apple.com/us/artist/attic-band/1479350842'}];
        case 'Thesis':
            return [{label:'Request Thesis', className:'',link:'mailto:jackrockocasey@gmail.com'}];
        case 'KPISS':
            return [{label:'Get it on the App Store', className:'', link:'https://apps.apple.com/us/app/kpiss-radio/id1553622148'},{label:'Listen to Lunar Rotation', className:'',link:'https://kpiss.fm/show/lunar-rotation/'}];
        case 'Beatitude':
            return [{label:'Get on the App Store', className:'',link:'https://apps.apple.com/us/app/beatitude/id1424467447'}];
        case 'Crate Digger':
            return [{label:'View on Github', className:'', link:'https://github.com/jcbauman/CrateDigger'}];
        case 'Quio':
            return [{label:'Quio on the App Store', className:'quioBlue', link:'https://apps.apple.com/us/app/quio-health/id1371020016'},{label:'Company Website', className:'quioBlue',link:'https://www.quio.com/'}];
        case 'Super 8':
            return [{label:'Super 8 Archives', className:'', link: 'https://www.mixcloud.com/djrockonyc/'}];
        case 'Graduation':
            return [{label:'Connect with Me', className:'linkedInBlue',link:'https://www.linkedin.com/in/jackcaseybauman/'}];
        case 'Scratch':
            return [{label:'Play Games', className: 'scratchOrange',link:'https://scratch.mit.edu/users/thevaudevillehouse/'}]
        default:
            return [];
    }
};

export const getYears = (title:string) => {
    switch(title){
        case 'Attic Band':
            return '2017-2020';
        case 'Thesis':
            return 'Dec 2016 - Aug 2019';
        case 'KPISS':
            return 'Sep 2019 - present';
        case 'Beatitude':
            return 'June 2018 - Aug 2018'
        case 'Crate Digger':
            return 'Sep 2018 - Dec 2018';
        case 'Quio':
            return 'Sep 2019 - present'
        case 'Super 8':
            return 'Jan 2016 - Sep 2019';
        case 'Graduation':
            return 'June 2019';
        case 'Playwriting':
            return '2014 - 2018';
        case 'Scratch':
            return '2010 - present'
        default:
            return [];
    }
};

export const getImageCredits = (title:string) => {
    switch(title){
        case 'Attic Band':
            return 'Courtesy of me';
        case 'Thesis':
            return 'Creative Commons Licensed';
        case 'KPISS':
            return 'Courtesy of KPISS';
        case 'Beatitude':
            return 'Designed by me'
        case 'Crate Digger':
            return 'Designed by me';
        case 'Quio':
            return 'Courtesy of Quio'
        case 'Super 8':
            return 'Designed by me';
        case 'Graduation':
            return 'Photo by a Maeve Regis Photography (maeveregis.com)';
        case 'Playwriting':
            return 'Courtesy of Berkeley Rep';
        case 'Scratch':
            return 'Creative Commons Licensed';
        default:
            return [];
    }
};

export const getTime = (title:string) => {
    switch(title){
        case 'Attic Band':
            return '3 years';
        case 'Thesis':
            return '2 years, 9 months';
        case 'KPISS':
            return 'About 2 years';
        case 'Beatitude':
            return '3 months'
        case 'Crate Digger':
            return '3 months';
        case 'Quio':
            return 'About 2 years'
        case 'Super 8':
            return '3 years, 8 months';
        case 'Graduation':
            return '4 years';
        case 'Playwriting':
            return '4 years';
            case 'Scratch':
            return '11+ years';
        default:
            return [];
    }
};

export const getNotes = (title:string) => {
    switch(title){
        case 'Attic Band':
            return (<div className='notesText'>
                <h5 className='spotifyPadding'>I served as a co-leader and recording and performance musician (keyboard) for "Attic Band", contributing to every song on our debut album "Obituary," and subsequent singles, available on all streaming platforms.</h5>
                <iframe title="Attic Band Tracks" src="https://open.spotify.com/embed/artist/7EBUZ0QFsDLyYKvq7C97BZ?theme=0" width="100%"
                        height="80" frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
            </div>);
        case 'Thesis':
            return (<ul className='notesText'>
                <li>I completed my undergraduate thesis under Steve Whittaker, PhD. and Leyla Takayama, PhD., studying the quantified-self and user
                    interpretation of intelligent systems. (Available upon request)</li>
                <li>The system I used for my thesis studies was written in Javascript.</li>
                <li>I worked in the HCI Lab studying computer application-based human emotions research, technology-mediated reflection, and user
                    experience. Co-authored multiple paper submissions on computing, mental health, and trust and accuracy in AI.</li>
            </ul>);
        case 'KPISS':
            return (<ul className='notesText'>
                <li>I solo-designed, developed, and maintained an iOS application for a Brooklyn community internet radio station. The app, ???KPISS Radio???,
                    is currently available on the App Store with hundreds of monthly active users and 100% 5-star reviews.
                    <li>The app uses Google Calendar API, AVKit, and some web-scraping technology.  I wrote it in Objective-C ????????.</li>
                    <li> Additionally I host a biweekly soul/funk radio show, ???Lunar Rotation."  Listen to the next episode live, or browse all the archives available online.</li>
                </li>
            </ul>);
        case 'Beatitude':
            return (<ul className='notesText'>
                <li>My first app! I solo-designed, coded, and released an iOS app, "Beatitude," integrating Spotify with maps to create geographic music playlists.</li>
                <li>Beatitude uses MapKit and location monitoring, Spotify's API, Postman, and background processing.  I wrote it in Swift.</li>
            </ul>);
        case 'Crate Digger':
            return (<ul className='notesText'>
                <li>I created and served as project leader of a group which designed a Tinder-like music recommendation app for Android.</li>
                <li>Crate Digger uses the Spotify API and employed a psuedo-Markov model to track user genre preferences to suggest new songs.  It's written in Java.</li>
            </ul>);
        case 'Quio':
            return (<ul className='notesText'>
                <li>My real job. For the last two years, I've been working full-time at Quio Technologies, a diabetes and chronic care management startup based in Manhattan.</li>
                <li>I served jointly as a Frontend Developer and later as our head iOS Developer.</li>
                <li>My tech stack at Quio is extensive, here's a taste: Objective-C, Swift, SwiftUI, Combine, Storyboard, and UIKit.</li>
                <li>For frontend, I used React, Javascript, Typescript, Redux, Mirage, Python, and SQL.</li>
                <li>For a full list of things I worked on, check out my resume.</li>
            </ul>);
        case 'Super 8':
            return (<ul className='notesText'>
                <li>I worked at KZSC Santa Cruz for almost 4 years, hosting weekly soul radio shows 'Super 8', 'Disc Hockey,' and Louisiana music collective 'Lagniappe.' Previous host of jazz radio shows 'Borrowed Beats,' (hip hop) 'Clam Chops,' (jazz funk) and 'Fireside Chat' (30s jazz).</li>
                <li>At KZSC, I served as our Director of Graphic Design and Volunteer Coordinator.</li>
                <li>A collection of some of my old Super 8s are available online.</li>
            </ul>);
        case 'Graduation':
            return (<ul className='notesText'>
                <li>Graduated UC Santa Cruz with a double major in Computer Science and Cognitive Science B.S.</li>
                <li>Received the Regents' Scholarship, University of California's highest academic honor.</li>
                <li>This is my mom, ain't she cool?</li>
            </ul>);
        case 'Playwriting':
            return (
                <div className='notesText'>
                    <h5>In my free time, I am an award-winning playwright, with four scripts receiving full productions with student or professional actors.</h5>
                    <ul>
                        <li>"Bell" (pictured, 2014) - Produced by Berkeley Repertory Theater - A bellboy at a 1930s Hollywood hotel falls in love with a nervous and abused old woman who stays there.</li>
                        <li>"Darling on the Nickel" (2015) - Produced by Playground SF (San Francisco) - A wealthy author discusses the meaning of life with a homeless woman at a bus stop.</li>
                        <li>"Dark Mystery" (2016) - Produced by UCSC Chautauqua - A murderer goes to an insane psychiatrist's haunted mansion attempting to cure himself of a his fear of ghosts (in vain).</li>
                        <li>"The Rubies of Mokarar" (2017) - Produced by UCSC Chautauqua - A barista in 1920s Trieste is embroiled in a murderous scheme to steal Ethiopian jewels from an old one-armed Italian army veteran.  I wrote this in Shakespearean pentameter and rhyme.</li>
                    </ul>
                </div>);
        case 'Scratch':
            return (<ul className='notesText'>
                <li>In middle school I was working at a carnival and penny arcade museum (Playland-Not-At-The-Beach in El Cerrito).  During this time, I reproduced many of our antique games online, including pinball machines, slot machines, and fortune tellers.</li>
                <li>While some may consider Scratch child's play, I'm proud of a lot of these.  Some are even fun to play! See for yourself.</li>
            </ul>);
        default:
            return <p>Nothing to see here</p>;
    }
};

export const getImage = (title:string) => {
    switch (title) {
        case 'Attic Band':
            return atticBandAlbum;
        case 'Thesis':
            return thesisImage;
        case 'KPISS':
            return kpissRadio;
        case 'Beatitude':
            return beatitudeLogo;
        case 'Crate Digger':
            return crateDiggerLogo;
        case 'Quio':
            return quioHealthLogo;
        case 'Super 8':
            return super8Logo;
        case 'Graduation':
            return graduation;
        case 'Playwriting':
            return berkeleyRep;
        case 'Scratch':
            return penny;
        default:
            return atticBandAlbum;
    }
};