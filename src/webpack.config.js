const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    externalsType: 'script',
    externals: {
        ymaps3: [
          `promise new Promise((resolve) => {
              if (typeof ymaps3 !== 'undefined') {
                return ymaps3.ready.then(() => resolve(ymaps3));
              }
              const script = document.createElement('script');
              script.src = "https://api-maps.yandex.ru/v3/?apikey=7c9d449d-d8cb-4a4b-bc82-bd87b181daa4&lang=ru_RU";
              script.onload = () => {
                ymaps3.ready.then(() => resolve(ymaps3));
              };
              document.head.appendChild(script);
            })`
        ]
    },
    devtool: 'cheap-source-map'
};
