/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/pokemon',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
