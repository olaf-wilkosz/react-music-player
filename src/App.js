import { useEffect, useState } from 'react';
import SongPlayer from './SongPlayer';
import SongList from './SongList';
import './styles.css';

function App() {
	const URL = 'https://examples.devmastery.pl/songs-api/songs';
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		fetch(URL).then((response) => {
			if (response.ok) {
				response.json().then(setSongs);
			}
		});
	}, []);

	const [currentSongIndex, setCurrentSongIndex] = useState(0);

	const currentSong = songs[currentSongIndex];

	return (
		<div className="App">
			{songs.length > 0 ? (
				<>
					<SongPlayer song={currentSong} currentSongIndex={currentSongIndex} songListLength={songs.length} />
					<SongList songs={songs} currentSong={currentSong} setCurrentSongIndex={setCurrentSongIndex} />
				</>
			) : (
				'Loading...'
			)}
		</div>
	);
}

export default App;
