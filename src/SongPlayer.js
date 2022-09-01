import { useRef } from 'react';

function SongPlayer(props) {
	const audioRef = useRef();

	return (
		<section className="SongPlayerWrapper">
			<section
				className="SongPlayerBackground"
				style={{ backgroundImage: `url(${props.song.coverUrl})` }}
			></section>
			<section className="SongPlayer">
				<h1>React Music Player</h1>
				<img src={props.song.coverUrl} alt="Song cover" />
				<div>
					<button id='prevBtn' disabled>⏮︎</button>
					<button onClick={() => {audioRef.current.play()}} id='playBtn'>⏵︎</button>
					<button onClick={() => {audioRef.current.pause()}} id='pauseBtn'>⏸︎</button>
					<button id='stopBtn' disabled>⏹︎</button>
					<button id='nextBtn' disabled>⏭︎</button>
				</div>
				<audio ref={audioRef} key={props.song.audioUrl}>
					<source src={props.song.audioUrl} />
				</audio>
			</section>
		</section>
	);
}

export default SongPlayer;
