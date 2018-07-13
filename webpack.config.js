const path = require('path');

module.exports = {
    entry: {
        'app': './src/app/app.js',
        'app1': './src/app/app1.js',
    },
    output: {
        path: path.resolve(__dirname, 'assets')+'/build',
        filename: '[name].bundle.js',
        publicPath: '/build',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'assets'),
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 3000
    }
};