$(document).ready(function() {
	function getTime() {
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		minutes = minutes.toString().length > 1 ? minutes : '0' + minutes;
		var show = hours > 12 ? ' PM' : ' AM';
		hours = hours > 12 ? hours - 12 : hours;
		$('.time').html(hours + ':' + minutes + show);
			setTimeout(getTime, 500);
	}

	getTime();
	
	function getDate() {
		var date = new Date();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var year = date.getFullYear();
		$('.date').html(month + '/' + day + '/' + year);
	}
	
	getDate();
	
	function launchIntoFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
	$('.menu-icon').click(function() {
		launchIntoFullscreen(document.documentElement);
	});
	
	$('.message-window').hide();
	
});