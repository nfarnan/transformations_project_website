import AudioPlayer from '../components/AudioPlayer';
import piano1 from '../assets/piano1.wav';
import piano2 from '../assets/piano2.mp3';
import piano3 from '../assets/piano3.wav';

function Media() { 
    return ( 
       <div className="audio-div">
            <AudioPlayer 
              title={'Piano 1'}
              file={piano1}/>
            <AudioPlayer 
              title={'Piano 2'}
              file={piano2}/>
            <AudioPlayer 
              title={'Piano 3'}
              file={piano3}/>
      </div> 
    ); 
} 
export default Media; 