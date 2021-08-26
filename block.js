/// meta.js
(function () {
	const meta = (val = {
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
	}) => {
		Object.assign(document.querySelector('meta[name=viewport]') ||
			document.getElementsByTagName('head')[0].appendChild(
				Object.assign(document.createElement('meta'), { name: val.name })), val)
		if (document.querySelector('meta[name=viewport]').content !== val.content) meta()
	}
	meta()
})();
