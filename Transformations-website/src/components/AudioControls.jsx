import { useState } from 'react';
import { TbRewindForward10, TbRewindBackward10 } from 'react-icons/tb';
import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5'


function AudioControls () {
    const [isPlaying, setIsPlaying] = useState(false);
    
    const toggle = () => {
        setIsPlaying((state) => !state);
    }

    return (
        <div className="audio-controls">
            <button>
                <TbRewindBackward10 />
            </button>
            <button onClick={toggle}>
                {isPlaying ? <IoPlaySharp /> : <IoPauseSharp />}
            </button>
            <button>
                <TbRewindForward10 />
            </button>
        </div>
    )
}
export default AudioControls;