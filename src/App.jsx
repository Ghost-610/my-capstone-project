import  { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import FooterPlayer from './components/FooterPlayer';
import { fetchPopularSongs, fetchFeaturedTracks } from './service/deezerapiservice';

const App = () => {
    const [featuredTracks, setFeaturedTracks] = useState([]);
    const [popularSongs, setPopularSongs] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);

    useEffect(() => {
        // Fetch data on component mount
        const fetchData = async () => {
            const fetchedFeaturedTracks = await fetchFeaturedTracks();
            const fetchedPopularSongs = await fetchPopularSongs();
            console.log("fetchedPopularSongs",fetchedPopularSongs)
            console.log()

            setFeaturedTracks(fetchedFeaturedTracks);
            setPopularSongs(fetchedPopularSongs);
        };

        fetchData();
    }, []);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <MainContent
                featuredTracks={featuredTracks}
                popularSongs={popularSongs}
                setCurrentTrack={setCurrentTrack}
            />
            <FooterPlayer currentTrack={currentTrack} />
        </div>
    );
};

export default App;
