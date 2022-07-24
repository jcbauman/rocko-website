import {
    atticBandAlbum,
    beatitudeLogo, berkeleyRep,
    crateDiggerLogo, flowcodelogo, graduation,
    kpissRadio,
    quioHealthLogo,
    super8Logo,
    thesisImage
} from "../images";
import { RoleDetails, Roles } from "../types";

export const PRIORITY_LIST = [Roles.PLAYS, Roles.UCSC, Roles.ATTIC, Roles.CRATE, Roles.THESIS, Roles.KZSC, Roles.KPISS, Roles.QUIO, Roles.FLOWCODE,  Roles.BEATITUDE]

const getNotes:any = (title:Roles) => {
    switch(title){
        case Roles.ATTIC:
            return (<div className='notesText'>
                <h5 className='spotifyPadding'>I served as a co-leader and recording and performance musician (keyboard) for "Attic Band", contributing to every song on our debut album "Obituary," and subsequent singles, available on all streaming platforms.</h5>
                <iframe title="Attic Band Tracks" src="https://open.spotify.com/embed/artist/7EBUZ0QFsDLyYKvq7C97BZ?theme=0" width="100%"
                        height="80" frameBorder="0" allowTransparency={true} allow="encrypted-media"/>
            </div>);
        case Roles.THESIS:
            return (<ul className='notesText'>
                <li>I completed my undergraduate thesis under Steve Whittaker, PhD. and Leyla Takayama, PhD., studying the quantified-self and user
                    interpretation of intelligent systems. (Available upon request)</li>
                <li>The system I used for my thesis studies was written in Javascript.</li>
                <li>I worked in the HCI Lab studying computer application-based human emotions research, technology-mediated reflection, and user
                    experience. Co-authored multiple paper submissions on computing, mental health, and trust and accuracy in AI.</li>
            </ul>);
        case Roles.KPISS:
            return (<ul className='notesText'>
                <li>I solo-designed, developed, and maintained an iOS application for a Brooklyn community internet radio station. The app, “KPISS Radio”,
                    is currently available on the App Store with hundreds of monthly active users and 100% 5-star reviews.
                    <li>The app uses Google Calendar API, AVKit, and some web-scraping technology.  I wrote it in Objective-C 👴🏻.</li>
                    <li> Additionally I host a biweekly soul/funk radio show, “Lunar Rotation."  Listen to the next episode live, or browse all the archives available online.</li>
                </li>
            </ul>);
        case Roles.BEATITUDE:
            return (<ul className='notesText'>
                <li>My first app! I solo-designed, coded, and released an iOS app, "Beatitude," integrating Spotify with maps to create geographic music playlists.</li>
                <li>Beatitude uses MapKit and location monitoring, Spotify's API, Postman, and background processing.  I wrote it in Swift.</li>
            </ul>);
        case Roles.CRATE:
            return (<ul className='notesText'>
                <li>I created and served as project leader of a group which designed a Tinder-like music recommendation app for Android.</li>
                <li>Crate Digger uses the Spotify API and employed a psuedo-Markov model to track user genre preferences to suggest new songs.  It's written in Java.</li>
            </ul>);
        case Roles.QUIO:
            return (<ul className='notesText'>
                <li>My previous gig. For 2 years, I worked full-time at Quio Technologies, a diabetes and chronic care management startup based in Manhattan.</li>
                <li>I served jointly as a Frontend Developer and later as our head iOS Developer.</li>
                <li>My tech stack at Quio is extensive, here's a taste: Objective-C, Swift, SwiftUI, Combine, Storyboard, and UIKit.</li>
                <li>For frontend, I used React, Javascript, Typescript, Redux, Mirage, Python, and SQL.</li>
                <li>For a full list of things I worked on, check out my resume.</li>
            </ul>);
        case Roles.KZSC:
            return (<ul className='notesText'>
                <li>I worked at KZSC Santa Cruz for almost 4 years, hosting weekly soul radio shows 'Super 8', 'Disc Hockey,' and Louisiana music collective 'Lagniappe.' Previous host of jazz radio shows 'Borrowed Beats,' (hip hop) 'Clam Chops,' (jazz funk) and 'Fireside Chat' (30s jazz).</li>
                <li>At KZSC, I served as our Director of Graphic Design and Volunteer Coordinator.</li>
                <li>A collection of some of my old Super 8s are available online.</li>
            </ul>);
        case Roles.UCSC:
            return (<ul className='notesText'>
                <li>Graduated UC Santa Cruz with a double major in Computer Science and Cognitive Science B.S.</li>
                <li>Received the Regents' Scholarship, University of California's highest academic honor.</li>
                <li>This is my mom, ain't she cool?</li>
            </ul>);
        case Roles.PLAYS:
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
        case Roles.FLOWCODE:
            return (<ul className='notesText'>
                <li>My real job. I serve as a Frontend Developer at Flowcode, the offline to online company, working on the Core team.</li>
                <li>I work all over the company, with an emphasis on their Flowpage and Flowcode QR product suite.</li>
                <li>For frontend, I use Next, React, Typescript, Jest, and GraphQL.</li>
            </ul> 
            )
        default:
            return <p>Nothing to see here</p>;
    }
}


export const ROLE_COLLECTION: {[value in Roles]:RoleDetails} = {
    [Roles.ATTIC]: { title: 'Concert and Recording Musician',
    company: 'Attic Band',
    buttons: [{label:'Listen on Spotify', className:'spotifyGreen',link:'https://open.spotify.com/artist/7EBUZ0QFsDLyYKvq7C97BZ?si=gUT2KcHKQZinyxYvLGZMVw&dl_branch=1'},{label:'Listen on Apple Music', className:'appleMusicRed',link:'https://music.apple.com/us/artist/attic-band/1479350842'}],
    yearsActive: '2017-2020',
    duration:'3 years',
    imageCredits: 'Courtesy of me',
        notes: getNotes(Roles.ATTIC),
        image:atticBandAlbum
    },
    [Roles.THESIS]: { title: 'Research Assistant',
    company: 'UCSC Human Computer Interaction Lab',
    buttons: [{label:'Request Thesis', className:'',link:'mailto:jackrockocasey@gmail.com?subject=Request for Senior Thesis'}],
    yearsActive: 'Dec 2016 - Aug 2019',
    duration:'2 years, 9 months',
    imageCredits: 'Creative Commons Licensed',
        notes: getNotes(Roles.THESIS),
        image:thesisImage
    },
    [Roles.KPISS]:{ title: 'iOS Developer and Radio DJ',
    company: 'KPISS.fm Radio',
    buttons: [{label:'Get it on the App Store', className:'', link:'https://apps.apple.com/us/app/kpiss-radio/id1553622148'},{label:'Listen to Lunar Rotation', className:'',link:'https://kpiss.fm/show/lunar-rotation/'}],
    yearsActive: 'About 3 years',
    duration:'3 months',
    imageCredits: 'Courtesy of KPISS',
        notes: getNotes(Roles.KPISS),
        image:kpissRadio
    },
    [Roles.BEATITUDE]:{ title: 'iOS Developer',
    company: 'Beatitude',
    buttons: [{label:'Get on the App Store', className:'',link:'https://apps.apple.com/us/app/beatitude/id1424467447'}],
    yearsActive: 'June 2018 - Aug 2018',
    duration:'',
    imageCredits: 'Designed by me',
        notes: getNotes(Roles.BEATITUDE),
        image:beatitudeLogo
    },
    [Roles.CRATE]:{ title: 'Android Developer',
    company: 'Crate Digger',
    buttons: [{label:'View on Github', className:'', link:'https://github.com/jcbauman/CrateDigger'}],
    yearsActive: 'Sep 2018 - Dec 2018',
    duration:'3 months',
    imageCredits: 'Designed by me',
        notes: getNotes(Roles.CRATE),
        image:crateDiggerLogo
    },
     [Roles.QUIO]:{ title: 'Frontend Developer and iOS Developer',
    company: 'Quio Technologies',
    buttons: [{label:'Quio on the App Store', className:'quioBlue', link:'https://apps.apple.com/us/app/quio-health/id1371020016'},{label:'Company Website', className:'quioBlue',link:'https://www.quio.com/'}],
    yearsActive: 'Sep 2019 - Aug 2021',
    duration:'2 years',
    imageCredits: 'Courtesy of Quio',
        notes:getNotes(Roles.QUIO),
        image:quioHealthLogo
    },
      [Roles.KZSC]:{ title: 'Dir. of Graphic Design, Volunteer Coordinator, & Radio DJ',
    company: 'KZSC Santa Cruz Radio, 88.1FM',
    buttons: [{label:'Super 8 Archives', className:'', link: 'https://www.mixcloud.com/djrockonyc/'}],
    yearsActive: 'Jan 2016 - Sep 2019',
    duration:'3 years, 8 months',
    imageCredits: 'Designed by me',
        notes: getNotes(Roles.KZSC),
        image:super8Logo
    },
       [Roles.UCSC]:{ title: 'Graduate',
    company: 'University of California, Santa Cruz',
    buttons: [{label:'Connect with Me', className:'linkedInBlue',link:'https://www.linkedin.com/in/jackcaseybauman/'}],
    yearsActive: 'June 2019',
    duration:'4 years',
    imageCredits: 'Photo by Maeve Regis Photography (maeveregis.com)',
        notes: getNotes(Roles.UCSC),
        image:graduation
    },
       [Roles.PLAYS]: { title: 'Playwright',
    company: 'Berkeley Repertory Theater & Others',
    buttons: [{label:'Dig some plays', className:'',link:'https://jcbauman.portfoliobox.net/playwriting'}],
    yearsActive: '2014 - 2018',
    duration:'4 years',
    imageCredits: 'Courtesy of Berkeley Rep',
        notes: getNotes(Roles.PLAYS),
        image:berkeleyRep
    },
        [Roles.FLOWCODE]: { title: 'Frontend Developer',
    company: 'Flowcode',
    buttons: [{label:'Flowcode Website', className:'flowcodeBlack',link:'https://flowcode.com'}],
    yearsActive: '2021 - present',
    duration:'1 year+',
    imageCredits: 'Courtesy of Flowcode',
    notes: getNotes(Roles.FLOWCODE),
        image:flowcodelogo
    }
}

