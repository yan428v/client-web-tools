import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'], // разрешать импорт файлов без указания расширений
    }
}