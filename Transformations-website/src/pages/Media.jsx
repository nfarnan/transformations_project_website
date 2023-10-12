import AudioPlayer from '../components/AudioPlayer';

import woods from '../data/woods-audio.wav';

function Media() { 
    return ( 
       <div> 
            <AudioPlayer 
              title={'woods-audio'}
              file={woods}/>
            <AudioPlayer 
              title={'woods-audio2'}
              file={woods}/>
            <AudioPlayer 
              title={'woods-audio3'}
              file={woods}/>
      </div> 
    ); 
} 
export default Media; 