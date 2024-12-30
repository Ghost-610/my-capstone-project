import "react";

const FooterPlayer = () => {
  return (
    <footer className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="https://via.placeholder.com/50" alt="Current Song" className="w-12 h-12 rounded-lg" />
        <div>
          <h3 className="font-semibold text-sm">Echoes of Midnight</h3>
          <p className="text-xs text-gray-400">Jon Hickman</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="text-white hover:text-gray-400">⏮</button>
        <button className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white">▶</button>
        <button className="text-white hover:text-gray-400">⏭</button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-400">0:53</span>
        <div className="bg-gray-700 w-32 h-1 rounded-full">
          <div className="bg-green-500 w-1/2 h-full rounded-full"></div>
        </div>
        <span className="text-xs text-gray-400">3:58</span>
      </div>
    </footer>
  );
};

export default FooterPlayer;
