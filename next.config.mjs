/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
    // loader: "default",
    // path: "/_next/image",
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "github.com",
    //     pathname: "/",
    //     port: "",
    //   },
    // ],
  },
};

export default nextConfig;
