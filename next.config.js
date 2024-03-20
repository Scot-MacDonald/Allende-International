/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "media2.ntslive.co.uk",
      "www.zabriskie.de",
      "www.nts.live",
      "www.soundcloud.com",
      "www.npla.de",
      "www.media.gq-magazine.co.uk",
    ],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
