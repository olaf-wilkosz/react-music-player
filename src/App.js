import './styles.css';
import SongPlayer from './SongPlayer';

function App() {
	const audioUrl = 'https://examples.devmastery.pl/assets/audio/deadfro5h.mp3';

	return (
		<div className="App">
			<SongPlayer audioUrl={audioUrl} />
		</div>
	);
}

export default App;
