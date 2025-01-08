const API_URL = 'https://api.deezer.com';

// Fetch popular songs
export const fetchPopularSongs = async () => {
    try {
        const response = await fetch(`${API_URL}/chart`);
        const data = await response.json();
        return data.tracks.data;
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
        return data.albums.data;
    } catch (error) {
        console.error('Error fetching featured tracks:', error);
        return [];
    }
};
export const searchSong = async (query) => {
    try {
        const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.data; // Contains the list of matching songs
    } catch (error) {
        console.error('Error searching for song:', error);
        return [];
    }
};
