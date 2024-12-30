import "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import FooterPlayer from "./components/FooterPlayer";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex flex-grow">
        <Sidebar />
        <MainContent />
      </div>
      <FooterPlayer />
    </div>
  );
};

export default App;
