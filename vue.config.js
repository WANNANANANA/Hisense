const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
    publicPath: './',
    devServer: {
        port: 8888,
        open: true
    },
    configureWebpack: config => {
        const plugins = [];
        if (process.env.NODE_ENV === 'production') {
            // gzip压缩
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(js|css)$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
            config.externals = {
                'vue': 'Vue'
            }
        }
        config.plugins = [
            ...config.plugins,
            ...plugins
        ]
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugin('html')
                .tap(args => {
                    args[0].cdn = 'prod';
                    return args;
                });
        }
    }
}