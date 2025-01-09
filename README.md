# RhythmTune - Music Streaming Application

## Project Description
RhythmTune is a modern, sleek music streaming application designed to offer users an immersive experience. With features like searching for songs, playing tracks, viewing popular songs, and enjoying curated playlists, RhythmTune aims to deliver a seamless and enjoyable music experience. Built using React and Tailwind CSS, it is optimized for responsiveness and functionality.

---

## Features
- **Search Functionality:** Search for songs and retrieve results directly from the Deezer API.
- **Footer Player:** A fully interactive music player with controls for play, pause, next, previous, shuffle, and volume adjustment.
- **Popular Songs:** Horizontally scrollable carousel displaying popular tracks.
- **Curated Playlists:** Organized playlists tailored to moods and genres.
- **Responsive Design:** Mobile-friendly layout ensuring usability across all devices.

---

## Technologies Used
- **React:** Frontend library for building UI components.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Deezer API:** To fetch music data such as charts, tracks, and artist information.
- **Node.js (optional):** For setting up a local server if needed.

---

## Installation
### Prerequisites
- Node.js and npm/yarn installed on your machine.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Ghost-610/my-capstone-project
   cd my-music-player
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open the application in your browser at:
   ```
   http://localhost:5173/
   ```

---

## API Integration
This project uses the Deezer API to fetch real-time music data. Below are the key endpoints utilized:
- Fetch Popular Songs:
  ```
  GET https://api.deezer.com/chart
  ```
- Search for Songs:
  ```
  GET https://api.deezer.com/search?q=<song_name>
  ```

---

## Folder Structure
```
src/
|-- components/
|   |-- FooterPlayer.jsx
|   |-- SearchBar.jsx
|   |-- PopularSongs.jsx
|-- styles/
|   |-- tailwind.css
|-- App.js
|-- index.js
```

---

## Usage
1. **Search for Songs:**
   - Use the search bar to find songs by title or artist.
2. **Play Songs:**
   - Click on a track from the Popular Songs section to play it in the footer player.
3. **Adjust Volume:**
   - Use the volume slider in the footer player to control the sound.
4. **Browse Playlists:**
   - Explore curated playlists from the navigation menu.

---

## Contributing
We welcome contributions to improve RhythmTune. Please follow the steps below:
1. Fork the repository.
2. Create a new branch for your feature/bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For questions or feedback, please contact:
- **Name:** Elorm Gershon
- **Email:** alidugershon@gmail.com

---

Enjoy using RhythmTune! 🎵

