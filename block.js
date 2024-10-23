/// meta.js
(function () {
	const meta = () => console.log('meta', Object.assign(
		document.querySelector('meta[name=viewport]') ||
		document.getElementsByTagName('head')[0].appendChild(document.createElement('meta')),
		{
			name: 'viewport',
			content: `width=${
				640 || Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
			}, initial-scale=1.0, maximum-scale=1.0, user-scalable=0`
		}
	))
	self.addEventListener('load', meta)
	self.addEventListener('resize', meta)
	self.addEventListener('DOMContentLoaded', meta)
	meta()
})();
