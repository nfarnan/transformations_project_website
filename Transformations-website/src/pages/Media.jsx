import AudioPlayer from '../components/AudioPlayer';

function Media() { 
    return ( 
       <div> 
            <AudioPlayer 
              title={'woods-audio'}
              loc={'../data/woods-audio.wav'}/>
            <AudioPlayer 
              title={'woods-audio2'}
              loc={'../data/woods-audio.wav'}/>
            <AudioPlayer 
              title={'woods-audio3'}
              loc={'../data/woods-audio.wav'}/>
      </div> 
    ); 
} 
export default Media; 