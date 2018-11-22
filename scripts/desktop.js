$(document).ready(function() {
	$('.start-button').click(function() {
		if ($('.browse').hasClass('show')) {
			$('.tab').addClass('show').removeClass('small')
		} else if ($('.tab').hasClass('show')) {
			$('.tab').removeClass('show')
		} else {
			$('.tab').addClass('show').removeClass('small')
		}
		$('.browse').removeClass('show');
		
	});
	$(document).click(function(e) {
		e.stopPropagation();
		if ($('.tab').hasClass('show')) {
			if (!$(e.target).is('.start-button, .start-button >') && !$(e.target).is('.tab, .tab *') && !$(e.target).is('.search, .search >')) {
				$('.tab').removeClass('show').removeClass('small');
				$('.browse').removeClass('show');
			}
			if (!$(e.target).is('.power')) {
				$('.power-options').removeClass('show');
			}
		}
		if (!$(e.target).is('.notifications-tab, .notifications-tab *, .notif, .notif >')) {
			$('.notifications-tab').removeClass('show');
		}
	});
	$(document).contextmenu(function(e) {
		e.preventDefault();
		if (!$(e.target).is('.bar, .bar *, .tab, .tab *, .notifications-tab, .notifications-tab *')) {
			var y = e.clientY;
			var x = e.clientX;
			if (x + $('.menu').width() > $(window).width()) {
				x = x - (x + $('.menu').width() - $(window).width());
			}
			if (y + 293 + $('.bar').height() > $(window).height()) {
				y = y - (y + 293 + $('.bar').height() - $(window).height());
			}
			$('.menu').css({
				'top': y,
				'left': x
			});
			$('.menu').addClass('show');
			$('.tab').removeClass('show').removeClass('small');
			$('.browse').removeClass('show');
			$('.notifications-tab').removeClass('show');
		}
	});
	$(document).mousedown(function() {
		$('.menu').removeClass('show');
	});
	$(window).resize(function() {
		$('.menu').removeClass('show');
	});
	var widthTab;
	$('.tab').resizable({
		start: function() {
			widthTab = $('.tab').innerWidth();
		},
		grid: [318,1],
		minWidth: 300,
		minHeight: 300,
		handles: 'n, e',
		stop: function (event, ui) {
			$('.tab').css({
				'position': 'absolute',
				'bottom': 40,
				'left': 0
			});
			if ($('.tab').innerWidth() > $(window).width()) {
				$('.tab').width($(this).width() - 318);
			}
			if ($('.tab').hasClass('small')) {
				$('.tab').width(400)
			}
			setTimeout(function() {
				$('.tab').addClass('show').removeClass('small');
				$('.browse').removeClass('show');
			}, 1);
		}
	});
	
	$('.power').click(function() {
		$('.power-options').toggleClass('show');
	});
	
	$('.notif').click(function() {
		$('.notifications-tab').toggleClass('show');
	});
	
	$('.search').click(function() {
		if (!$('.tab').hasClass('show')) {
			$('.tab').addClass('no-transition');
			setTimeout(function() {
				$('.tab').removeClass('no-transition')
			}, 150);
			$('.browse input').val('');
		}
		$('.browse').toggleClass('show');
		$('.tab').addClass('show');
		$('.tab').toggleClass('small')
		setTimeout(function() {
			$('.browse input').focus().select();
		}, 150);
		
	});
	
	$('.browse input').keyup(function() {
		if ($(this).val().length > 0) {
			$('.browse span').addClass('hide');
		} else {
			$('.browse span').removeClass('hide');
		}
	});
	setTimeout(function() {
		$('.load-screen span').html("Welcome to Windows 10").css({'color': 'white', 'font-size': '26px', 'font-weight': 400})
		setTimeout(function() {
			$('.load-screen').addClass('hide')
		}, /*3000*/0)
	}, /*3000*/0);
});