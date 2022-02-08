module.exports = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			issuer: /\.[jt]sx?$/,
			test: /\.svg$/i,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: [{
								name: "preset-default",
								params: {
									overrides: {
										removeViewBox: false,
									},
								},
							}],
						},
					},
				},
			],
		});
		return config;
	},
};
