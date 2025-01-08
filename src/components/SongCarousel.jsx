import "react";

const SongCarousel = () => {
  const songs = [
    { id: 1, title: "Echoes of Midnight", artist: "Jon Hickman", image: <img alt="Adele" src="../assets/Adele.jpg"></img> },
    // Add more songs here
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 justify-center">
      {songs.map((song) => (
        <div
          key={song.id}
          className="flex-shrink-0 w-56 h-72 bg-gray-800 rounded-lg shadow-md p-4 text-center"
        >
          <img src={song.image} alt={song.title} className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold">{song.title}</h3>
          <p className="text-sm text-gray-400">{song.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default SongCarousel;
