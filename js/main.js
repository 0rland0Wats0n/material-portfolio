(function() {
	//catch submission of landing form
	$('.js-button').on('click', function() {
		$.post('../lib/set_name.php', $('form.submit-name-form').serialize(), function(data) {
			console.log(data);
		});
	});
})();
