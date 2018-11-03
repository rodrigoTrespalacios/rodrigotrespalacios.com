const { withNextein } = require('nextein/config')
const withOptimizedImages = require('next-optimized-images');

module.exports = withNextein(withOptimizedImages({
    optimizeImagesInDev: true
}))
