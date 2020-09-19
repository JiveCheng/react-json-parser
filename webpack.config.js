const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        '/example/app': './src/example/app.tsx',
        index: path.join(__dirname, 'src', 'index.tsx'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
                query: {
                    presets: [['@babel/env', '@babel/preset-react']],
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                semantic: {
                    name: './example/semantic',
                    chunks: 'initial',
                },
            },
        },
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        host: 'localhost',
        port: 8080,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new TsConfigPathsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/example/index.html',
            filename: 'example/index.html',
            chunks: ['app'],
            scriptLoading: 'defer',
        }),
    ],
};
