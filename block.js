/// meta.js
(function () {
	const val = {
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
	},
	meta = () => Object.assign(document.querySelector('meta[name=viewport]') ||
		document.getElementsByTagName('head')[0].appendChild(
			Object.assign(document.createElement('meta'), { name: val.name })), val)
	self.addEventListener('load', meta, { once: true })
	self.addEventListener('DOMContentLoaded', meta, { once: true })
	meta()
})();
