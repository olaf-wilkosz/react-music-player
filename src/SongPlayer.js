function SongPlayer(props) {
	return (
		<section>
			<h1>React Music Player</h1>
			<img src={props.song.coverUrl} alt="Song cover" width="250" height="250" />
			<audio key={props.song.audioUrl} controls>
				<source src={props.song.audioUrl} />
			</audio>
		</section>
	);
}

export default SongPlayer;
