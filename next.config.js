/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "my-build-id";
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5003",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "185.233.117.106",
        port: "5003",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "185.233.117.106",
        port: "5005",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "fs.dasushi.km.ua",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
