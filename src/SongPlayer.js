import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faPlay, faPause, faStop, faForward } from '@fortawesome/free-solid-svg-icons'

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
					<button id='prevBtn' disabled><FontAwesomeIcon icon={faBackward} /></button>
					<button onClick={() => {audioRef.current.play()}} id='playBtn'><FontAwesomeIcon icon={faPlay} /></button>
					<button onClick={() => {audioRef.current.pause()}} id='pauseBtn'><FontAwesomeIcon icon={faPause} /></button>
					<button id='stopBtn' disabled><FontAwesomeIcon icon={faStop} /></button>
					<button id='nextBtn' disabled><FontAwesomeIcon icon={faForward} /></button>
				</div>
				<audio ref={audioRef} key={props.song.audioUrl}>
					<source src={props.song.audioUrl} />
				</audio>
			</section>
		</section>
	);
}

export default SongPlayer;
