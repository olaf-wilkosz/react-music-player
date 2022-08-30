function SongPlayer(props) {
	return (
		<section>
			<h1>React Music Player</h1>
			<audio controls>
				<source src={props.audioUrl} />
			</audio>
		</section>
	);
}

export default SongPlayer;
