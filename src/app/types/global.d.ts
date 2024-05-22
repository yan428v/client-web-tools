declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
// Определение типов для SCSS модулей
// Позволяет импортировать SCSS файлы как объекты в TypeScript,
// где свойства объекта соответствуют именам классов.
// Это необходимо для типизации стилей, импортируемых из SCSS-файлов,
// обеспечивая автодополнение и проверки типов во время разработки.

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
