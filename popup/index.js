/**
 * Popup page js support here
 */
$(function() {
	$('.notify-all').change(function() {
		$('.toggle-switch input[type="checkbox"]').prop('checked', $(this).is(':checked'));
	});
	$('input[type="checkbox"]').not('.notify-all').change(function() {
		var isAnyChecked = true;
		$.each($('input[type="checkbox"]').not('.notify-all'), function() {
			isAnyChecked = isAnyChecked && $(this).is(':checked');
		});
		$('.notify-all').prop('checked', isAnyChecked);
	});
});
