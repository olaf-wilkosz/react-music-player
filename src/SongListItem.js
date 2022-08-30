function SongListItem(props) {
	return (
		<li>
			{props.song.title} by {props.song.artist}
		</li>
	);
}

export default SongListItem;
