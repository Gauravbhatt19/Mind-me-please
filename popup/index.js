$(function() {
	$('.notify-all').change(function() {
		$('.toggle-switch input[type="checkbox"]').prop('checked', $(this).is(':checked'));
	});
	$('.notifications-container').on('change', 'input[type="checkbox"]', function() {
		if (!$(this).hasClass('notify-all')) {
			var isAllChecked = true;
			$.each($('input[type="checkbox"]').not('.notify-all'), function() {
				isAllChecked = isAllChecked && $(this).is(':checked');
			});
			$('.notify-all').prop('checked', isAllChecked);
		}
		chrome.storage.sync.set({'checkedNotifications': getCheckedNotificationIDs()});
	});

	var toggleSwitchElements = '<div><span class="on">On</span><span class="off">Off</span></div><i></i>';

	chrome.storage.sync.get(['checkedNotifications'], function(storedData) {
		var isAllChecked = true;
		notifications.forEach(function(value){
			var isChecked = storedData.checkedNotifications.includes(value.id);
			isAllChecked = isAllChecked && isChecked;
			var toggleSwitch = '<span class="toggle-switch float-right"><input type="checkbox" '+(isChecked?'checked="checked"':'')+'class="d-none" id="'+value.id+'">'+toggleSwitchElements+'</span>';
			$('<div/>', {
				html: '<label class="fz-18 c-pointer user-select-none">'+value.title+toggleSwitch+'</label>',
				class: "py-3"
			}).appendTo('.notifications-container');
			$('<hr class="w-275 border-1 border-gray">').appendTo('.notifications-container');
		});
		$('.notify-all').prop('checked', isAllChecked);
	});
});

function getCheckedNotificationIDs() {
	var checkedNotificationIDs = new Array();
	$.each($('input[type="checkbox"]').not('.notify-all'), function() {
		if( $(this).is(':checked') ) {
			checkedNotificationIDs.push( $(this).attr('id') );
		}
	});
	return checkedNotificationIDs;
}
