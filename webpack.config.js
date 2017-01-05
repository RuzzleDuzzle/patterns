module.exports = {
    entry: {
        app: ['./index.js']
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
          },
          {test: /\.html$/, loader: 'raw'},
          { test: /\.css$/, loader: "style!css" },
          { test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/" },
          { test: /\.(png|jpg|jpeg|gif|woff|woff2)$/, loader: 'url?limit=8192' },
          { test: /\.svg$/, loader: "file" }
        ]
    }
};