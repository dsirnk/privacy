/// load.js
(function load() {
	console.log('watch', document.querySelectorAll('[href*="watch?v="]')
		.forEach(e => e.href = e.href.replace('watch?v=', 'watch?quality_dash=worst&v=')));
	['load', 'resize', 'DOMContentLoaded']
		.map(e => self.removeEventListener(e, load) || self.addEventListener(e, load))
})();
