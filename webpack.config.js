const path = require('path');

module.exports = {
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        // publicPath: path.resolve(__dirname, 'build')+"/",
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
        extensions: [' ','.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        inline: true
    }
};