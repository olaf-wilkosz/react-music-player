function SongListItem(props) {
	return (
		<li style={{ backgroundColor: props.isCurrent ? 'orangered' : 'none' }} key={props.isCurrent}>
			{props.song.title} by {props.song.artist}
		</li>
	);
}

export default SongListItem;
