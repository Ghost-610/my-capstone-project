const API_URL = 'https://api.deezer.com/chart';

// Fetch popular songs
export const fetchPopularSongs = async () => {
    try {
        const response = await fetch(`${API_URL}/chart`);
        const data = await response.json();
        console.log(data)
        return data.tracks;
    } catch (error) {
        console.error('Error fetching popular songs:', error);
        return [];
    }
};

// Fetch featured tracks
export const fetchFeaturedTracks = async () => {
    try {
        const response = await fetch(`${API_URL}/chart`);
        const data = await response.json();
        console.log(albums)
        return data.albums;
    } catch (error) {
        console.error('Error fetching featured tracks:', error);
        return [];
    }
};
// Search for a song
export const searchSong = async (query) => {
    try {
        const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        console.log()
        return data.data; // Extract search results
    } catch (error) {
        console.error('Error searching for song:', error);
        return [];
    }
};