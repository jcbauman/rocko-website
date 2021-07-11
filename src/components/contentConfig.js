import {
    atticBandAlbum,
    beatitudeLogo, berkeleyRep,
    crateDiggerLogo, graduation,
    kpissRadio,
    quioHealthLogo,
    super8Logo,
    thesisImage
} from "../images";

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
            return 'Multiple productions';
        default:
            return '';
    }
};

export const getButtons = (role:string) => {
    switch(role){
        case 'Attic Band':
            return [{label:'Listen on Spotify', className:'spotifyGreen',link:'https://open.spotify.com/artist/7EBUZ0QFsDLyYKvq7C97BZ?si=gUT2KcHKQZinyxYvLGZMVw&dl_branch=1'},{label:'Listen on Apple Music', className:'',link:'https://music.apple.com/us/artist/attic-band/1479350842'}];
        case 'Thesis':
            return [{label:'Read Thesis', className:'',link:'mailto:jackrockocasey@gmail.com'}];
        case 'KPISS':
            return [{label:'Get KPISS Radio on the App Store', className:'', link:'https://apps.apple.com/us/app/kpiss-radio/id1553622148'},{label:'Listen to Lunar Rotation', className:'',link:'https://kpiss.fm/show/lunar-rotation/'}];
        case 'Beatitude':
            return [{label:'Get Beatitude on the App Store', className:'',link:'https://apps.apple.com/us/app/beatitude/id1424467447'}];
        case 'Crate Digger':
            return [{label:'See Crate Digger on Github', className:'', link:'https://github.com/jcbauman/CrateDigger'}];
        case 'Quio':
            return [{label:'View Quio Health on the App Store', className:'quioBlue', link:'https://apps.apple.com/us/app/quio-health/id1371020016'},{label:'Company Website', className:'quioBlue',link:'https://www.quio.com/'}];
        case 'Super 8':
            return [{label:'Listen to Super 8 Archives', className:'', link: 'https://www.mixcloud.com/djrockonyc/'}];
        case 'Graduation':
            return [{label:'Connect with Me', className:'linkedInBlue',link:'https://www.linkedin.com/in/jackcaseybauman/'}];
        default:
            return [];
    }
};

export const getTime = (title:string) => {
    return '2015-2019';
}

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
            default:
                return atticBandAlbum;
        }
    };