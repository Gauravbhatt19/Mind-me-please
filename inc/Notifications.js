class Notification {
	constructor(id, title) {
		this.id = id;
		this.title = title;
	}
}

let notifications = [
	new Notification('fix-posture', 'Fix your Posture'),
	new Notification('blink-eyes', 'Blink your Eyes'),
	new Notification('stretch-arms', 'Stretch your Arms'),
	new Notification('drink-water', 'Drink some water'),
	new Notification('walk-bit', 'Walk a bit'),
];
