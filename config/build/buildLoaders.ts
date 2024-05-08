import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/, // регуляркой ищет .ts и .tsx файлы
        use: 'ts-loader', // преобразовывает их через ts-loader
        exclude: /node_modules/, // игнорирует файлы в node_modules
    }

    return [
        typescriptLoader
    ]
}