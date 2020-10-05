import axios from 'axios';

const KEY='AIzaSyCVvp6B_72V9LHi3aZzaf1n18rt1cBGM74';

export default axios.create({
    
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxReasults:5,
        key:KEY
        
    }
});