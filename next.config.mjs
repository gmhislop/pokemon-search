/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['raw.githubusercontent.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.githubusercontent.com',
              port: '',
            },
          ],
    },
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
