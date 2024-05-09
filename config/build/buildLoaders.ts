import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const cssLoaders = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }

    const typescriptLoader = {
        test: /\.tsx?$/, // регуляркой ищет .ts и .tsx файлы
        use: 'ts-loader', // преобразовывает их через ts-loader
        exclude: /node_modules/, // игнорирует файлы в node_modules
    }

    return [
        typescriptLoader,
        cssLoaders
    ]
}