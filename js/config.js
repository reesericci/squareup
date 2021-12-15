class Config {
	constructor() { }

	getThemeMode() {
		const themeModes = {
			'light': {
				name: 'Light',
				icon: 'light-mode'
			},
			'dark': {
				name: 'Dark',
				icon: 'dark-mode'
			},
			'auto': {
				name: 'Auto',
				icon: 'auto-mode',
				lightHour: '7',
				darkHour: '18'
			}
		};

		return themeModes;
	}

	getFontFamily() {
		const fontFamilies = {
			'monospace': 'mononoki, Fira Code Retina, Hack, Ubuntu Mono, Monaco, Lucida Console, monospace',
			'sans-serif': 'NHaasGroteskTXW01-55Rg, Inter, SF Pro Text, Roboto, Open Sans, sans-serif',
			'serif': 'serif'
		};

		return fontFamilies;
	}

	getQuickSearchData() {
		const quickSearchData = {
			'!as': {
				urlPrefix: 'https://smile.amazon.com/s?k='
			},
			'!yt': {
				urlPrefix: 'https://youtube.com/results?search_query='
			},
			'!gh': {
				urlPrefix: 'https://github.com/search?q='
			}
		};

		return quickSearchData;
	}

	getSearchEngines() {

		const searchEngines = {
			'duckduckgo': {
				name: 'Duckduckgo',
				prefix: 'https://duckduckgo.com/?q=',
				icon: 'duckduckgo'
			},
			'startpage': {
				name: 'Startpage',
				prefix: 'https://www.startpage.com/do/dsearch?query=',
				icon: 'startpage'
			}
		};

		return searchEngines;
	}

	getWebSites() {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'social'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			},
			{
				site: 'Mail',
				icon: 'gmail',
				url: 'https://mail.reeseric.ci/mail',
				category: 'social'
			},
			{
				site: 'YouTube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			},
			{
				site: 'Backblaze',
				icon: 'gdrive',
				url: 'https://backblaze.com',
				category: 'cloud'
			},
			{
				site: 'Gitlab',
				icon: 'gitlab',
				url: 'https://gitlab.com/',
				category: 'development'
			},
			{
				site: 'Duckduckgo',
				icon: 'duckduckgo',
				url: 'https://duckduckgo.com/',
				category: 'search engine'
			},
			{
				site: 'Google',
				icon: 'google',
				url: 'https://google.com/',
				category: 'search engine'
			},
			{
				site: 'Twitch',
				icon: 'twitch',
				url: 'https://twitch.tv/',
				category: 'media'
			},
			{
				site: 'RLCS',
				icon: 'twitch',
				url: 'https://twitch.tv/RocketLeague',
				category: 'media'
			},
			{
				site: 'Discord',
				icon: 'discord',
				url: 'https://discord.com/',
				category: 'social'
			},
			{
				site: 'Discord Dev',
				icon: 'discord',
				url: 'https://discord.com/developers',
				category: 'development'
			},
			{
				site: 'Spotify',
				icon: 'spotify',
				url: 'https://spotify.com/',
				category: 'media'
			},
			{
				site: 'ArchWiki',
				icon: 'archwiki',
				url: 'https://wiki.archlinux.org/',
				category: 'information'
			},
			{
				site: 'Figma',
				icon: 'figma',
				url: 'https://figma.com/',
				category: 'design'
			},
			{
				site: 'StackOverflow',
				icon: 'stackoverflow',
				url: 'https://stackoverflow.com/',
				category: 'development'
			},
			{
				site: 'SuperUser',
				icon: 'superuser',
				url: 'https://superuser.com/',
				category: 'development'
			},
			{
				site: 'ServerFault',
				icon: 'superuser',
				url: 'https://superuser.com/',
				category: 'development'
			},
			{
				site: 'Amazon',
				icon: 'amazon',
				url: 'https://smile.amazon.com/',
				category: 'shop'
			},
			{
				site: 'MDN Web Docs',
				icon: 'mdn',
				url: 'https://developer.mozilla.org/',
				category: 'development'
			},
			{
				site: 'Startpage',
				icon: 'startpage',
				url: 'https://startpage.com/',
				category: 'search engine'
			}
		];

		return webSites;
	}

	getPanelSites() {
		// Panel
		// A list of websites that will be generated and put on the Panel
		const panelSites = [
			{
			  site: "GitHub",
			  icon: "github",
			  url: "https://github.com"
			},
			{
			  site: "MDN",
		          icon: "mdn",
			  url: "https://developer.mozilla.org"
			}
		];

		return panelSites;
	}
}
