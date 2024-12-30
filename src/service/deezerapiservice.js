// services/deezerService.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'https://api.deezer.com';
const APP_ID = import.meta.env.VITE_APP_DEEZER_APP_ID;


export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching tracks:', error);
    throw error;
  }
};

export const getTrackDetails = async (trackId) => {
  try {
    const response = await axios.get(`${BASE_URL}/track/${trackId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching track details:', error);
    throw error;
  }
};
