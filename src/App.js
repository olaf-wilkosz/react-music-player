import './styles.css';
import SongPlayer from './SongPlayer';
import SongList from './SongList';

function App() {
	const songs = [
		{
			audioUrl: 'https://examples.devmastery.pl/assets/audio/deadfro5h.mp3',
			coverUrl: 'https://examples.devmastery.pl/assets/audio/deadfro5h.jpg',
			title: 'Deadfro5h',
			artist: 'starfrosh',
		},
		{
			audioUrl: 'https://examples.devmastery.pl/assets/audio/majesty.mp3',
			coverUrl: 'https://examples.devmastery.pl/assets/audio/majesty.jpg',
			title: 'Majesty (Original Mix)',
			artist: 'Ryan Craig Martin',
		},
		{
			audioUrl: 'https://examples.devmastery.pl/assets/audio/runs.mp3',
			coverUrl: 'https://examples.devmastery.pl/assets/audio/runs.jpg',
			title: 'Runs',
			artist: 'Wowa',
		},
	];

	const currentSong = songs[2];

	return (
		<div className="App">
			<SongPlayer song={currentSong} />
			<SongList songs={songs} />
		</div>
	);
}

export default App;
