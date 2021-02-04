chrome.storage.sync.get(['checkedNotifications'], function(storedData) {
	var storedCheckedNotifications = JSON.parse(storedData.checkedNotifications, false);

	chrome.alarms.onAlarm.addListener(function(alarm) {
		var checkedNotification = getObjectElement(storedCheckedNotifications, 'id', alarm.name);
		var quote = '"'+checkedNotification.quote+'"';
		chrome.notifications.create({
			type: 'basic',
			iconUrl: 'assets/png/icon48.png',
			title: checkedNotification.title,
			message: quote,
			buttons: [
				{title: 'Done'}
			],
			priority: 0
		});
	});
});

function getObjectElement(haystack, key, value) {
	for (const element of haystack) {
		if ( element[key] === value ) {
			return element;
		}
	}
	return false;
}
