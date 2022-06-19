import { API_DOMAIN, IMAGES_DOMAINS } from "./config/domains.mjs";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	images: {
		domains: [API_DOMAIN].concat(IMAGES_DOMAINS),
	},
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
				}
			],
		});
		return config;
	},
};

export default nextConfig;
