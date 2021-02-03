$(function() {
	$('.notify-all').change(function() {
		$('.toggle-switch input[type="checkbox"]').prop('checked', $(this).is(':checked'));
	});
	$('.notifications-container').on('change', 'input[type="checkbox"]', function() {
		if (!$(this).hasClass('notify-all')) {
			var isAnyChecked = true;
			$.each($('input[type="checkbox"]').not('.notify-all'), function() {
				isAnyChecked = isAnyChecked && $(this).is(':checked');
			});
			$('.notify-all').prop('checked', isAnyChecked);
		}
	});

	var toggleSwitchElements = '<div><span class="on">On</span><span class="off">Off</span></div><i></i>';

	notifications.forEach(function(value){
		var toggleSwitch = '<span class="toggle-switch float-right"><input type="checkbox" class="d-none '+value.id+'">'+toggleSwitchElements+'</span>';
		$('<div/>', {
			html: '<label class="fz-18 c-pointer user-select-none">'+value.title+toggleSwitch+'</label>',
			class: "py-3"
		}).appendTo('.notifications-container');
		$('<hr class="w-275 border-1 border-gray">').appendTo('.notifications-container');
	});
});
