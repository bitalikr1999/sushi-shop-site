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
    ],
  },
};

module.exports = nextConfig;
