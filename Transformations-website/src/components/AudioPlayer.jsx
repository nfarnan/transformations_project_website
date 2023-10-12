import { useRef, useState } from 'react';
import AudioControls from './AudioControls';
import ProgressBar from './ProgressBar';

function AudioPlayer ({ title, file }) {
    const [timeProgressed, setTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const audioRef = useRef(); // reference to audio element
    const progressBarRef = useRef(); // reference to progress bar

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setTotalTime(audioRef.current.duration);
        progressBarRef.current.max = seconds;
    }


    return (
        <div className="audio-player">
            <div className="audio-title">
                <h1>{title}</h1>
                <audio 
                    src={file} 
                    ref={audioRef}
                    onLoadedMetadata={onLoadedMetadata}/>
            </div>
            <div className="controls-and-bar">
                <AudioControls audioRef={audioRef} />
                <ProgressBar 
                    progressBarRef={progressBarRef} 
                    audioRef={audioRef}
                    timeProgressed={timeProgressed}
                    totalTime={totalTime}
                />
            </div>
            
        </div>
    )
}
export default AudioPlayer;