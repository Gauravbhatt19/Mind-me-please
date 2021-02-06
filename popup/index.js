$(function() {
	$('.notify-all').change(function() {
		$('.toggle-switch input[type="checkbox"]').prop('checked', $(this).is(':checked'));
	});

	var toggleSwitchElements = '<div><span class="on">On</span><span class="off">Off</span></div><i></i>';

	chrome.storage.sync.get(['checkedNotifications'], function(storedData) {
		var storedCheckedNotifications = (
			Object.keys(storedData).length !== 0 &&
			storedData.constructor === Object
			) ? JSON.parse(storedData.checkedNotifications, false) : [];
		$('.notifications-container').on('change', 'input[type="checkbox"]', function() {
			if (!$(this).hasClass('notify-all')) {
				var isAllChecked = true;
				$.each($('input[type="checkbox"]').not('.notify-all'), function() {
					isAllChecked = isAllChecked && $(this).is(':checked');
				});
				$('.notify-all').prop('checked', isAllChecked);
			}
			var checkedNotifications = getCheckedNotifications(storedCheckedNotifications);
			chrome.storage.sync.set({'checkedNotifications': JSON.stringify(checkedNotifications)});
			setAlarms(checkedNotifications);
		});

		var isAllChecked = true;
		notifications.forEach(function(value){
			var isChecked = true;
			var isChecked = getObjectElement(storedCheckedNotifications, 'id', value.id) !== false;
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

function getCheckedNotifications(storedCheckedNotifications) {
	var checkedNotifications = new Array();
	$.each($('input[type="checkbox"]').not('.notify-all'), function() {
		if( $(this).is(':checked') ) {
			var checkedNotification = getNotification( $(this).attr('id') );
			if ( checkedNotification !== false ) {
				checkedNotifications.push({
					'id': checkedNotification.id,
					'title': checkedNotification.title,
					'quote': checkedNotification.quote,
				});
			}
		}
	});
	return checkedNotifications;
}

function setAlarms(checkedNotifications){
	chrome.alarms.clearAll();
	checkedNotifications.forEach(function(value){
		var notification = getNotification(value.id);
		if ( notification !== false ) {
			chrome.alarms.create(
				notification.id,
				{
					when: Date.now() + notification.cycleTime * 60000,
					periodInMinutes: notification.cycleTime
				}
			);
		}
	});
}

function getObjectElement(haystack, key, value) {
	for (const element of haystack) {
		if ( element[key] === value ) {
			return element;
		}
	}
	return false;
}

function getNotification(id) {
	for (const notification of notifications) {
		if ( notification.id === id ) {
			return notification;
		}
	}
	return false;
}
