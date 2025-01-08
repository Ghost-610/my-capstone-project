import { useState, useEffect } from "react";

const FooterPlayer = () => {
  const [volume, setVolume] = useState(50); // Volume state
  const [isPlaying, setIsPlaying] = useState(false); // Play/Pause state
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Current song index

  const playlist = [
    {
      title: "Echoes of Midnight",
      artist: "Jon Hickman",
      albumArt: "https://via.placeholder.com/50",
      duration: "3:58",
      progress: "0:53",
    },
    {
      title: "Golden Days",
      artist: "Felix Carter",
      albumArt: "https://via.placeholder.com/50",
      duration: "4:12",
      progress: "1:23",
    },
    {
      title: "Fading Horizon",
      artist: "Ella Hunt",
      albumArt: "https://via.placeholder.com/50",
      duration: "3:45",
      progress: "0:42",
    },
  ];

  // Set the current song based on the playlist
  const [currentSong, setCurrentSong] = useState(playlist[currentSongIndex]);

  // Update currentSong whenever currentSongIndex changes
  useEffect(() => {
    setCurrentSong(playlist[currentSongIndex]);
  }, [currentSongIndex]);

  // Handle play/pause functionality
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? "Paused" : "Playing");
  };

  // Handle next song
  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  // Handle previous song
  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    console.log(`Volume: ${e.target.value}`);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 bg-gray-800 p-4 flex flex-wrap items-center justify-between md:justify-around">
      {/* Song Details */}
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        <img src={currentSong.albumArt} alt="Current Song" className="w-12 h-12 rounded-lg" />
        <div>
          <h3 className="font-semibold text-sm text-white">{currentSong.title}</h3>
          <p className="text-xs text-gray-400">{currentSong.artist}</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex space-x-4 items-center mb-2 md:mb-0">
        <button onClick={playPrevious} className="text-white hover:text-gray-400">⏮</button>
        <button
          onClick={togglePlayPause}
          className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button onClick={playNext} className="text-white hover:text-gray-400">⏭</button>
        <button className="text-white hover:text-gray-400">🔁</button>
        <button className="text-white hover:text-gray-400">🔀</button>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center space-x-2 w-full md:w-auto">
        <span className="text-xs text-gray-400">{currentSong.progress}</span>
        <div className="bg-gray-700 w-full md:w-32 h-1 rounded-full relative">
          <div className="bg-green-500 h-full rounded-full" style={{ width: "50%" }}></div>
        </div>
        <span className="text-xs text-gray-400">{currentSong.duration}</span>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2">
        <span className="text-white text-sm">🔊</span>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 md:w-32 bg-gray-700 rounded-lg overflow-hidden"
        />
      </div>
    </footer>
  );
};

export default FooterPlayer;
