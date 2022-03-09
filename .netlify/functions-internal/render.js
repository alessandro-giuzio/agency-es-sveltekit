const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon.png","coffee_growth.e4035c9e.webp","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","grow-your-shop.c0027f2c.webp","images/AG.jpeg","images/AG.svg","images/background/road.jpeg","images/background/yellow-page.jpeg","images/background/yellow-page.webp","images/blog/256px-Plus_symbol.svg.png","images/blog/32px-Plus_symbol.svg.png","images/blog/grow-your-shop.webp","images/blog/growth_tips_hero.webp","images/blog/how-to-build-reputation.webp","images/blog/imposter.webp","images/blog/online-marketing.webp","images/blog/reputation.webp","images/blog/websitebuilder.webp","images/coffee_growth.webp","images/github.svg","images/linkedin.svg","images/profile/Alessandro.svg","images/profile/Profile-pic-1.png","images/profile/Profile-pic-1.webp","images/profile/profile.jpg","images/profile/profile.webp","images/social.svg","images/svg/accept-call.svg","images/svg/digital-media.svg","images/svg/email-received.svg","images/svg/google-map.svg","images/svg/paint-bucket.svg","images/svg/startup-rocket-launch.svg","images/twitter.svg","images/works/prometeocv.webp","images/works/resume.webp","images/works/space.webp","logo-brand.png","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png","paint-bucket.2afab6d5.svg","profile.18e0f915.webp","prometeocv.4d6e2e81.webp","space.3ec8181d.webp","startup-rocket-launch.bef1e50a.svg"]),
	_: {
		mime: {".png":"image/png",".webp":"image/webp",".ico":"image/vnd.microsoft.icon",".jpeg":"image/jpeg",".svg":"image/svg+xml",".jpg":"image/jpeg"},
		entry: {"file":"start-1f270cbb.js","js":["start-1f270cbb.js","chunks/vendor-178f3627.js"],"css":["assets/vendor-73e15068.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/politica-de-privacidad\/?$/,
				params: null,
				path: "/politica-de-privacidad",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/contacto\/?$/,
				params: null,
				path: "/contacto",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/sobre-mi\/?$/,
				params: null,
				path: "/sobre-mi",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/?$/,
				params: null,
				path: "/blog",
				shadow: null,
				a: [0,6,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/crea-tu-pagina-web\/?$/,
				params: null,
				path: "/blog/crea-tu-pagina-web",
				shadow: null,
				a: [0,6,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: null,
				a: [0,6,9],
				b: [1]
			}
		]
	}
});
