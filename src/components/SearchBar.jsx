import "react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow">
      <input
        type="text"
        placeholder="Search for a song"
        className="bg-gray-700 flex-grow px-4 py-2 rounded-lg text-white focus:outline-none"
      />
      <button type="">Search</button>
    </div>
  );
};

export default SearchBar;
