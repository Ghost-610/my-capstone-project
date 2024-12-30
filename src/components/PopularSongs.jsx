import  "react";

const PopularSongs = () => {
  const songs = [
    { id: 1, title: "Golden Days", artist: "Felix Carter", image: "https://via.placeholder.com/150" },
    { id: 1, title: "Golden Days", artist: "Felix Carter", image: "https://via.placeholder.com/150" },
    { id: 1, title: "Golden Days", artist: "Felix Carter", image: "https://via.placeholder.com/150" },
    { id: 1, title: "Golden Days", artist: "Felix Carter", image: "https://via.placeholder.com/150" },
    { id: 1, title: "Golden Days", artist: "Felix Carter", image: "https://via.placeholder.com/150" },
 // // Add more songs here
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {songs.map((song) => (
        <div key={song.id} className="flex flex-col items-center">
          <img
            src={song.image}
            alt={song.title}
            className="w-full h-40 object-cover rounded-lg mb-2"
          />
          <h4 className="font-semibold text-sm">{song.title}</h4>
          <p className="text-xs text-gray-400">{song.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularSongs;
