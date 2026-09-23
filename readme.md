# Analog Clock

A simple analog clock made with HTML, CSS, and JavaScript. The clock uses the current local time to position the hour, minute, and second hands.

## Run the project

No installation or build step is required.

1. Open `clock.html` directly in a web browser.
2. Keep the page open to see the clock update every second.

You can also serve the folder with any local static file server and open the resulting local URL.

## Project structure
f2
- `clock.html` - Defines the clock face, numbers, and hands.
- `style.css` - Controls the clock layout and visual styling.
- `script.js` - Reads the current time and rotates the hands once per second.

## How it works

- The second hand moves 6 degrees for every second.
- The minute hand moves 6 degrees for every minute.
- The hour hand includes the current minutes for smoother movement between hour marks.
