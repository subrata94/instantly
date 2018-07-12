const path = require('path');

module.exports = {
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, 'assets')+'/build',
        filename: 'bundle.js',
        // publicPath: path.resolve(__dirname, 'assets'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: path.resolve(__dirname, "node_modules"),
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
        inline: true
    }
};