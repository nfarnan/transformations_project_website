import { useRef, useState } from 'react';
import AudioControls from './AudioControls';
import ProgressBar from './ProgressBar';

function AudioPlayer ({ title, file }) {
    const playPauseRef = useRef(); // reference to audio element

    return (
        <div className="audio-player">
            <div className="audio-title">
                <h1>{title}</h1>
                <audio src={file} ref={playPauseRef}/>
            </div>
            <AudioControls playPauseRef={playPauseRef} />
            <ProgressBar />
        </div>
    )
}
export default AudioPlayer;