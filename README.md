# Udacity FEND front end optimization challenge

To view the finished demo visit:
[https://timbrockman.com/udacity-web-optimization/](https://timbrockman.com/udacity-web-optimization/)

	1. start with Cameron's portfolio page
	2. optimize it (first pagespeed then framerate)
	3. ?
	4. profit (60+ fps & 90+ pagespeed)


The source project lies at [https://github.com/udacity/frontend-nanodegree-mobile-portfolio](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)

##current status
	[x] base repo files created
	[x] source files copied over
	[x] ngrok set up for pagespeed testing
	[x] gulpfile created (at least serve)
	[x] gruntfile created (after gulp-imagemin ate turd)
	[x] node modules installed
	[x] imagemin
	[x] image resize
	[x] min html
	[x] min css
	[x] dumped out gulpfile and npm gulp*

## index.html pagespeed
	- inlined style.css
	- @import'd Open Sans
	- print.css now media="print"
	- async'd all javascript
	- imagemin needed grunt (gulp imagemin was choking)
	- images resized and imagemin'd
	- html, js, & css minified

## pizzeria.html
	- optimize images (why not)

## main.js

### frame rate
	- scroll event only checks position and passes it to scrollHandler
	- scrollHandler uses request animation frame to cut 10 frames to under 2ms

### computational efficiency
	-	separated size calculations to separate function for on load on resize
	- used handles to query dom elements
	- left with simple function to update style width without selector query or size calculation
