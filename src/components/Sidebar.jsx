import "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 flex flex-col p-4 space-y-6">
      <div className="text-xl font-bold">RhythmoTune</div>
      <nav className="space-y-4">
        <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
          <span>Home</span>
        </button>
        <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
          <span>Categories</span>
        </button>
        <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
          <span>Artists</span>
        </button>
      </nav>
      <div className="mt-auto space-y-4">
        <h3 className="text-sm text-gray-400">Playlists</h3>
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded">Vibes & Chill</li>
          <li className="hover:bg-gray-700 p-2 rounded">Morning Boost</li>
          <li className="hover:bg-gray-700 p-2 rounded">Rhythm & Energy</li>
        </ul>
        <button className="w-full p-2 bg-red-500 text-center rounded hover:bg-red-600">
          LogIn
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
