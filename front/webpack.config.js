const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.jsx',
    watch: true,
    devServer: {
      historyApiFallback: true,
    },
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
      },
    module: {
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
                options: {
                  name: '/public/icons/[name].[ext]'
                }
            },
            {
                // string regex that matches all javascript files in the project directory
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    
                    loader: 'babel-loader',
                    options: {
                        // equivalent to the babel.config.json file
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        "comments": false
                    }
                }
                
            }
        ]
    }
}