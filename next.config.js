module.exports = (phase, { defaultConfig }) => {
    const rewrites = () => {
        return [
            {
                source: '/api/v1/:path*',
                destination: "http://15.164.152.33:8080/api/:path*",
            },
        ];
    }
    return {
        reactStrictMode: true,rewrites }
}