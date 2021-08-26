/// device-width.js
(function () {
	const start = () => document
		.querySelector('meta[name=viewport]')
		.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')
	if (document.readyState !== 'complete') self.addEventListener('load', start, { once: true })
	else if (document.readyState !== 'loading') start()
	else self.addEventListener('DOMContentLoaded', start, { once: true })
})();
