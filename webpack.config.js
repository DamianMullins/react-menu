const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use:
                {
                    loader: 'file-loader',
                }
            }
        ]
    },

    devServer: {
        contentBase: './public',
        open: true
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
};
