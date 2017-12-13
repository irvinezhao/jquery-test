(function ($) {
	$(document).ready(function () {
		let divElem = $('div'); console.log(divElem)
		divElem.css('background-color', "lightblue")
		let div1El = $('.div1')
		div1El.find('span').eq(0).remove()
	});
}
)(jQuery);