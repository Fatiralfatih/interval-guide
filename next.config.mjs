/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rerollcdn.com',
                port: '',
                pathname: '/GENSHIN/GameIcons/**'
            }
        ]
    }
};

export default nextConfig;
