module.exports = {
    siteUrl: process.env.SITE_URL || 'https://milkywayfootballacademy.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{
            userAgent: '*',
            allow: '/',
        }]
    }
}
