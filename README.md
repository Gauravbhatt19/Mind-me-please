*Mind me please!*
---
Chrome extension that will help you to stay healthier. It nudges you periodically to do essential small exercises when you are focused on your work and unconsciously forgetting to:
- drink some water
- stretch your arms
- fix your posture
- blink your eyes
- walk a bit

#### Getting Started:

1. [Add to chrome](https://chrome.google.com/webstore/detail/mind-me-please/jandofaifgkpdkhnlmdfdmenphiooopg)
1. Set exercise(s)<br>
![Alt Popup](./screenshots/popup.png?raw=true "Popup Window Screenshot")
1. Receive notification<br>
![Alt Notification](./screenshots/notification.png?raw=true "Notification Screenshot")

#### Directory Structure:
```
+ assets/
|       + css/utilities.css
|       |
|       + png/icon*.png
|
+ dist/..
|
+ inc/Notifications.js
|
+ popup/
|      + index.html
|      |
|      + index.js
|
+ screenshots/..
|
+ background.js
|
+ manifest.json
|
.
.
```

#### List of chrome APIs used:
- [chrome.alarms](https://developer.chrome.com/docs/extensions/reference/alarms/)
- [chrome.notifications](https://developer.chrome.com/docs/extensions/reference/notifications/)
- [chrome.storage](https://developer.chrome.com/docs/extensions/reference/storage/)

#### Contribution:
If you have a patch or facing any issue, please consider contributing to this repository.<br>
[Report Issue](https://github.com/Gauravbhatt19/Mind-me-please/issues/new)
