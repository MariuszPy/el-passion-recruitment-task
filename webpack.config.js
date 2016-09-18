module.exports = {
     entry: './src/react.js',
     output: {
         path: './build',
         filename: 'app.js',
     },
     module: {
         loaders: [{
             test: /\.jsx?$/,         // Match both .js and .jsx files
             exclude: /node_modules/,
             loader: "babel",
             query:
                {
                    presets:['react']
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'url-loader?limit=100000' }
        ]
     }
 }
