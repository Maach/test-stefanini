const path = require('path')
const svgFilePaths = ['src/assets/svgs'].map((v) => path.resolve(v))
const tagName = 'SvgIcon'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {},
    transformAssetUrls: {
        [tagName]: ['data']
    }
}
