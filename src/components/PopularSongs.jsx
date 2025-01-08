import "react";

const PopularSongs = () => {
  const songs = [
    { id: 1, title: "Golden Days", artist: "Felix Carter", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Echoes of Midnight", artist: "Jon Hickman", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Fading Horizon", artist: "Ella Hunt", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Electric Dreams", artist: "Mia Lowell", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Shadows & Light", artist: "Ryan Miles", image: "https://via.placeholder.com/150" }
  ];

  const handlePlaySong = (song) => {
    console.log(`Playing: ${song.title} by ${song.artist}`); // Placeholder for play functionality
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white mb-4">Popular Songs</h2>
      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
        {songs.map((song) => (
          <button
            key={song.id}
            className="flex-shrink-0 w-40 cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            onClick={() => handlePlaySong(song)}
          >
            <img
              src={song.image}
              alt={song.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h4 className="font-semibold text-sm text-white text-center truncate">{song.title}</h4>
            <p className="text-xs text-gray-400 text-center">{song.artist}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularSongs;
