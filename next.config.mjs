/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    staleTimes: {
      dynamic: 30,
    },
    ppr: true,
    after: true,
  },
};

export default nextConfig;
