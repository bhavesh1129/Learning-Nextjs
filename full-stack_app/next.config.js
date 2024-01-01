/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.pexels.com',
        }, {
            protocol: 'https',
            hostname: '**.flaticon.com',
        }, {
            protocol: 'https',
            hostname: 'images.unsplash.com',
        }]
    }
}

module.exports = nextConfig
