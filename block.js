/// meta.js
(function () {
	const val = {
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
	},
	meta = () => console.log(Object.assign(document.querySelector('meta[name=viewport]') ||
		document.getElementsByTagName('head')[0].appendChild(document.createElement('meta')), val))
	self.addEventListener('load', meta)
	self.addEventListener('DOMContentLoaded', meta)
	meta()
})();
