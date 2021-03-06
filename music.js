/*
 * Te3ds
 * by Bipeen Acharya, Olivier Mahame, Suraj Bajracharya
 * Submitted to: Dr. Joshua Stough
 * Date: April 9th, 2014
 */
var player;
var IS_MUSIC_PLAYING = false;

function pauseMusic(){
	$('#m_pause').trigger('click');
}

function playMusic(){
	$('#m_play').trigger('click');
}

function onPlayerReady(event) {
	$('#loadingMusic').hide();
	$('#m_play').show();
	$('#m_pause').hide();
	event.target.setVolume(100);
	event.target.setLoop(true);
	event.target.seekTo(10, false);
	event.target.stopVideo();

	$('#m_pause').hide().click( function(){

		event.target.stopVideo();
		IS_MUSIC_PLAYING = false;
		$('#m_pause').hide();
		$('#m_play').show();

	}
	);

	$('#m_play').click( function(){

		event.target.playVideo();
		IS_MUSIC_PLAYING = true;
		$('#m_pause').show();
		$('#m_play').hide();

	}
	);

}

function musicEvents(){
	$('#loadingMusic').show();
	$('#m_play').hide();
	$('#m_pause').hide();
	player = new YT.Player('ytplayer', {
		height: '1',
		width: '1',
		videoId: '2l-yUHo44hc',
		events: {
			'onReady': onPlayerReady
		}
	});


}
