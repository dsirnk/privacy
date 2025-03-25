/// load.js
(function load() {
	['load', 'resize', 'DOMContentLoaded']
		.map(e => self.removeEventListener(e, load) || self.addEventListener(e, load))

	/** *
	console.log('meta', Object.assign(
		document.querySelector('meta[name=viewport]') ||
		document.getElementsByTagName('head')[0].appendChild(document.createElement('meta')),
		{ name: 'viewport', content: `width=${
			640 || Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
		}, initial-scale=1.0, maximum-scale=1.0, user-scalable=0` }
	))
	/** */

	document.querySelectorAll('[href*="watch?v="]')
		.forEach(e => e.href = e.href.replace('watch?v=', 'watch?quality_dash=worst&v='))
})();
