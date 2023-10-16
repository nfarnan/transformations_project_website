import AudioPlayer from '../components/AudioPlayer';
import elephant from '../assets/BabyElephantWalk60.wav';
import band from '../assets/CantinaBand60.wav';
import panther from '../assets/PinkPanther60.wav';

function Media() { 
    return ( 
       <div> 
            <AudioPlayer 
              title={'Baby Elephant Walk'}
              file={elephant}/>
            <AudioPlayer 
              title={'Cantina Band Sounds'}
              file={band}/>
            <AudioPlayer 
              title={'Pink Panther Theme'}
              file={panther}/>
      </div> 
    ); 
} 
export default Media; 