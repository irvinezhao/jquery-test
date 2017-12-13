(function ($) {
	$(window).on("load", function () {
		$('.submitme').on('click', function () {
			let val = $('input').val()
			let div = $('<div>')
			div.html(val)
			$('body').append(div)
		})
	})
}
)(jQuery);