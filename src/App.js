import './styles.css';
import SongPlayer from './SongPlayer';

function App() {
	const currentSong = {
		audioUrl: 'https://examples.devmastery.pl/assets/audio/deadfro5h.mp3',
		coverUrl: 'https://examples.devmastery.pl/assets/audio/deadfro5h.jpg',
		title: 'Deadfro5h',
		artist: 'starfrosh',
	};

	return (
		<div className="App">
			<SongPlayer song={currentSong} />
		</div>
	);
}

export default App;
