const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            "angular",
            "angular-resource",
            "@uirouter/angularjs",
            "angular-sanitize",
            "./src/app.js"
        ]
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        }, {
                            loader: 'sass-loader'
                        }
                    ]
                 })
            }, {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            filename: 'core.css'
        }),
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src')
        }
    }
};