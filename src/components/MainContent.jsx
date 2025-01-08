import "react";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import SongCarousel from "./SongCarousel";
import PopularSongs from "./PopularSongs";

const MainContent = () => {
  return (
    <main className="flex-grow p-6 space-y-6">
      <SearchBar />
      <SongCarousel />
      <Categories />
      <PopularSongs />
   
        </main>
  );
};

export default MainContent;
