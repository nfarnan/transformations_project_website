import { useEffect, useState } from 'react';
import { TbRewindForward10, TbRewindBackward10 } from 'react-icons/tb';
import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5'


function AudioControls ({ playPauseRef }) {
    const [isPlaying, setIsPlaying] = useState(false);

    // function called on button press
    const toggle = () => {
        setIsPlaying((state) => !state);
    }

    // set the audio to play or pause
    useEffect(() => {
        if (isPlaying) {
            playPauseRef.current.play();
        }
        else {
            playPauseRef.current.pause();
        }
    }, [isPlaying, playPauseRef]);

    return (
        <div className="audio-controls">
            <button>
                <TbRewindBackward10 />
            </button>
            <button onClick={toggle}>
                {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
            </button>
            <button>
                <TbRewindForward10 />
            </button>
        </div>
    )
}
export default AudioControls;