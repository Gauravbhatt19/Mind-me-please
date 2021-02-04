class Notification {
	constructor(id, title, quote, cycleTime) {
		this.id = id;
		this.title = title;
		this.quote = quote;
		this.cycleTime = cycleTime;
	}
}

let notifications = [
	new Notification( 'fix-posture',
		'Fix your Posture',
		'Your Posture Now Determines Your Portion Later.',
		10
	),
	new Notification( 'blink-eyes',
		'Blink your Eyes',
		'We are one blink of an eye away from being fully awake.',
		5
	),
	new Notification( 'stretch-arms',
		'Stretch your Arms',
		'The demand and supply of life is STRETCH.',
		30
	),
	new Notification( 'drink-water',
		'Drink some water',
		'Drink your way to better health. Drink water!',
		40
	),
	new Notification( 'walk-bit',
		'Walk a bit',
		'All truly great thoughts are conceived while walking.',
		60
	),
];
