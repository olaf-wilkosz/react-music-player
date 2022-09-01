import SongListItem from './SongListItem';

function SongList(props) {
	function songSelect(selectedSong) {
		const songIndex = props.songs.findIndex((song) => song.audioUrl === selectedSong.audioUrl);
		if (songIndex >= 0) {
			props.setCurrentSongIndex(songIndex);
		}
	}

	return (
		<section className="SongList">
			<h2>Songs</h2>
			<ul>
				{props.songs.map((song) => (
					<SongListItem
						song={song}
						key={song.audioUrl}
						isCurrent={song.audioUrl === props.currentSong.audioUrl}
						onSongSelect={songSelect}
					/>
				))}
			</ul>
		</section>
	);
}

export default SongList;
