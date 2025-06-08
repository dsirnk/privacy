/// load.js
(function load() {;
	console.log('loaded');
	const pref = window.video_data?.preferences || {};
	document.querySelectorAll('[href*="watch?v="]')
		.forEach(e => e.href = e.href.replace('/watch?v=', `/watch?quality=${pref.quality = 'dash'}&quality_dash=${pref.quality_dash = 'worst'}&v=`));
	['load', 'resize', 'DOMContentLoaded']
		.map(e => self.removeEventListener(e, load) || self.addEventListener(e, load));
})();
