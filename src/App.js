import './styles.css';

function App() {
	const audioUrl = 'https://examples.devmastery.pl/assets/audio/deadfro5h.mp3';

	return (
		<div className="App">
			<h1>React Music Player</h1>
			<audio controls>
				<source src={audioUrl} />
			</audio>
		</div>
	);
}

export default App;
