const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
 module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[contenthash].bundle.js",
        clean: true
},
    devtool: "source-map",
    devServer:{
        static: {
          directory: path.join(__dirname, 'dist'),
        },
port: 9000 },
plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
],
module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader","css-loader"]
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
        type: 'asset/resource',
        },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {

loader: 'babel-loader',
options: {
presets: ['@babel/preset-env']
}
}
}]
}
}


