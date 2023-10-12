import { useState } from 'react';
import AudioControls from './AudioControls';
import ProgressBar from './ProgressBar';

function AudioPlayer ({ title, loc }) {
    return (
        <div className="audio-player">
            <div className="audio-title">{title}</div>
            <AudioControls />
            <ProgressBar />
        </div>
    )
}
export default AudioPlayer;