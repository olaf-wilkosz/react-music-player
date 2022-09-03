import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPlay, faPause, faStop, faForward } from '@fortawesome/free-solid-svg-icons';

function SongPlayer(props) {
	const audioRef = useRef();

	Audio.prototype.stop = function () {
		this.pause();
		this.currentTime = 0;
	};

	const updateActiveControl = (e) => {
		const controls = document.querySelectorAll('.controls button');
		controls.forEach((control) => {
			control.classList.remove('active');
			if (e.target === control || control.contains(e.target)) {
				e.target.classList.add('active');
			}
		});
	};

	const playSong = (e) => {
		audioRef.current.play();
		updateActiveControl(e);
	};
	const pauseSong = (e) => {
		audioRef.current.pause();
		updateActiveControl(e);
	};
	const stopSong = (e) => {
		audioRef.current.stop();
		updateActiveControl(e);
	};

	return (
		<section className="SongPlayerWrapper">
			<section
				className="SongPlayerBackground"
				style={{ backgroundImage: `url(${props.song.coverUrl})` }}
			></section>
			<section className="SongPlayer">
				<h1>React Music Player</h1>
				<img src={props.song.coverUrl} alt="Song cover" />
				<div className="controls">
					<button id="prevBtn" disabled>
						<FontAwesomeIcon icon={faBackward} />
					</button>
					<button onClick={(e) => playSong(e)} id="playBtn">
						<FontAwesomeIcon icon={faPlay} />
					</button>
					<button onClick={(e) => pauseSong(e)} id="pauseBtn">
						<FontAwesomeIcon icon={faPause} />
					</button>
					<button onClick={(e) => stopSong(e)} id="stopBtn">
						<FontAwesomeIcon icon={faStop} />
					</button>
					<button id="nextBtn" disabled>
						<FontAwesomeIcon icon={faForward} />
					</button>
				</div>
				<audio ref={audioRef} key={props.song.audioUrl}>
					<source src={props.song.audioUrl} />
				</audio>
			</section>
		</section>
	);
}

export default SongPlayer;
