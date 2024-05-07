import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.ts"), // стартовая точка приложения
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/, // регуляркой ищет .ts и .tsx файлы
                use: 'ts-loader', // преобразовывает их через ts-loader
                exclude: /node_modules/, // игнорирует файлы в node_modules
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // разрешать импорт файлов без указания расширений
    },
}
export default config