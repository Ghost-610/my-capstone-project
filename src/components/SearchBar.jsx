import  { useState } from "react";
import { searchSong } from "../service/deezerapiservice"; // Import your Deezer search function

const SearchBar = () => {
  const [query, setQuery] = useState(""); // State to track the search query
  const [results, setResults] = useState([]); // State to store search results

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a search query");
      return;
    }

    try {
      const data = await searchSong(query); // Call the searchSong function
      setResults(data); // Store the results
      console.log("Search results:", data); // Display results in the console (for debugging)
    } catch (error) {
      console.error("Error searching for song:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Search Input & Button */}
      <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a song"
          className="bg-gray-700 flex-grow px-4 py-2 rounded-lg text-white focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        />
        <button
          type="button"
          onClick={handleSearch} // Trigger the search
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="bg-gray-800 mt-4 p-4 rounded-lg shadow w-full max-w-md">
          <h3 className="text-white font-semibold mb-2">Search Results:</h3>
          <ul>
            {results.map((song) => (
              <li key={song.id} className="text-gray-300 mb-1">
                {song.title} by {song.artist.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
