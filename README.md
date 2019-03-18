# RedditButtonClone
An imitation of the button on reddit's /r/TheButton.

Note: This project does not use Reddit's source code and doesn't look exactly like Reddit's button.

You can see it in action [here](https://staticallytypedrice.github.io/RedditButtonClone/index.html).

## What's the point?

Honestly, just for fun. However, it can be legitimately used on websites for any action requiring confirmation, but not enough to warrant a full "are you sure" popup (i.e. actions that are not important or not irreversible), since it is a covered button that you have to click twice to unlock.

## Usage

jQuery is required for this project. Import it onto the page using your perferred method.

Import the CSS and JavaScript files:

```html
<link href="/path/to/reddit_button.css" type="style/css" />
<script src="/path/to/reddit_button.js"></script>
```

Add the button like this:

```html
<div id="main-reddit_button" class="reddit_button">
<div id="main-reddit_button_cover" class="reddit_button_cover" onclick="reddit_button_unlock('main')"><p>Click Here...</p></div>
<div id="main-reddit_button_active" class="reddit_button_active" title="Press the button :P" onclick="onPressAction()"></div>
```

Rename all instances of `main` to a unique identifier (or keep it if it suits out), and change `onPressAction()` to whatever JavaScript function you want to call once the button has been pressed.
