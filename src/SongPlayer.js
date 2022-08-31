import { useRef } from 'react';

function SongPlayer(props) {
	const audioRef = useRef();

	return (
		<section>
			<h1>React Music Player</h1>
			<img src={props.song.coverUrl} alt="Song cover" width="250" height="250" />
			<div>
				<button onClick={() => audioRef.current.play()}>Play</button>
				<button onClick={() => audioRef.current.pause()}>Pause</button>
			</div>
			<audio ref={audioRef} key={props.song.audioUrl}>
				<source src={props.song.audioUrl} />
			</audio>
		</section>
	);
}

export default SongPlayer;
