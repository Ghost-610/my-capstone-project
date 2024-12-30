import axios from "axios";

const BASE_URL = "https://api.deezer.com";

/**
 * Fetch music data from Deezer based on a search query.
 * @param {string} query - The search term (e.g., song title, artist name).
 * @returns {Promise<Object[]>} - A Promise that resolves to an array of track objects.
 */
export const fetchMusicData = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { q: query },
    });
    return response.data.data; // Return relevant 'data' property
  } catch (error) {
    console.error("Error fetching music data:", error);
    throw new Error("Failed to fetch music data. Please try again.");
  }
};
