function SongListItem(props) {
	return (
		<li
			className={`SongListItem ${props.isCurrent ? 'selected' : ''}`}
			onClick={() => props.onSongSelect(props.song)}
			key={props.isCurrent}
		>
			{props.song.title} by {props.song.artist}
		</li>
	);
}

export default SongListItem;
