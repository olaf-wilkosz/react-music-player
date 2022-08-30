import SongListItem from './SongListItem';

function SongList(props) {
	return (
		<section>
			<h2>Songs</h2>
			<ul>
				{props.songs.map((song) => (
					<SongListItem song={song} key={song.audioUrl} />
				))}
			</ul>
		</section>
	);
}

export default SongList;
