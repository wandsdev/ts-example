const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'lib.min.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js' ]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}
