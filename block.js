/// meta.js
(function () {
	const meta = (val = {
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
	}) => {
		Object.assign(document.querySelector('meta[name=viewport]') ||
			document.getElementsByTagName('head')[0].appendChild(
				Object.assign(document.createElement('meta'), { name: val.name })), val)
		setTimeout(meta, 3000)
	}
	if (document.readyState !== 'complete') self.addEventListener('load', start, { once: true })
	else if (document.readyState !== 'loading') start()
	else self.addEventListener('DOMContentLoaded', start, { once: true })
})();
