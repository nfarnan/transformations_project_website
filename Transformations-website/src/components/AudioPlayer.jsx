import { useState } from 'react';
import AudioControls from './AudioControls';
import ProgressBar from './ProgressBar';

function AudioPlayer ({ title, file }) {
    return (
        <div className="audio-player">
            <div className="audio-title">
                <h1>{title}</h1>
                <audio src={file} />
            </div>
            <AudioControls />
            <ProgressBar />
        </div>
    )
}
export default AudioPlayer;