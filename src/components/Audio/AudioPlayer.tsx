"use client";

import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import { useState } from "react";
import "../../../public/styles/ff7-ui.css"; // Import the external CSS file

const playlist: { name: string, src: string }[] = [
    { name: "太空戰士7重製版原聲帶 The Prelude ~ Reunion(序章 重聚)", src: "https://od.lk/s/NzFfMjE1MjcwMzlf/FFVII%20The%20Prelude%20Reunion.mp3" },
    { name: "My Morning Jacket - Wordless Chorus", src: "https://od.lk/s/NzFfMjE1MjcwMzdf/My%20Morning%20Jacket%20-%20Wordless%20Chorus.mp3" },
    { name: "Doom - Doomsday", src: "https://od.lk/s/NzFfMjE1MjcwMjdf/Doom%20-%20Doomsday.mp3" },
    { name: "Run The Jewels - Thieves! (Screamed The Ghost)", src: "https://od.lk/s/NzFfMjE1MjcwMzhf/Run%20The%20Jewels%20-%20Thieves%21%20%28Screamed%20The%20Ghost%29.mp3" },
    { name: "Lord Huron - Not Dead Yet", src: "https://od.lk/s/NzFfMjE1MjY5Nzlf/Lord%20Huron%20-%20Not%20Dead%20Yet.mp3" },
    { name: "Uyama Hiroto - windspeaks", src: "https://od.lk/s/NzFfMjE1MjcwNDFf/Uyama%20Hiroto%20-%20windspeaks.mp3" },
];

export default function MusicPlayer() {
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const handleClickPrevious = () => {
        currentMusicIndex === 0
            ? setCurrentMusicIndex(playlist.length - 1)
            : setCurrentMusicIndex(currentMusicIndex - 1);
    };
    const handleClickNext = () => {
        currentMusicIndex < playlist.length - 1
            ? setCurrentMusicIndex(currentMusicIndex + 1)
            : setCurrentMusicIndex(0);
    };

    return (
        <div className="max-w-2xl mx-auto p-20">
            <p className="ff7-window pb-10">
                {playlist[currentMusicIndex].name}
            </p>
            <AudioPlayer
                onEnded={handleClickNext}
                autoPlayAfterSrcChange={true}
                showSkipControls={true}
                showJumpControls={false}
                src={playlist[currentMusicIndex].src}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                preload="none"
            />
        </div>
    );
}
