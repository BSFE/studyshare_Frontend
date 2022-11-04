module.exports = (phase, { defaultConfig }) => {
    const rewrites = () => {
        return [
            {
                source: '/api/v1/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
            },
        ];
    }
    return {
        reactStrictMode: true,rewrites }
}