const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    // entry:path.join(__dirname, "src","app.js"),
    // output:{
    //     path : path.join(__dirname, "dist"),
    //     filename : "app.bundle.js"
    // },

    entry: {
        '/js/c3js/initialFetch': path.resolve(__dirname, './src/js/c3js/initialFetch.js'),
        '/js/c3js/myjs':path.resolve(__dirname, './src/js/c3js/myjs.js'),
        '/js/c3js/contentPage':path.resolve(__dirname,'./src/js/c3js/contentPage.js')
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
      },

    mode : process.env.NODE_ENV || "development",
    module : {
        rules : [{
            test : /\.(js|jsx)$/,
            exclude : /node_modules/,
            use :['babel-loader']
        }]
    },
    plugins: [
        new CopyPlugin([
          { from: path.resolve(__dirname, './index.html'), to: path.resolve(__dirname, 'dist/index.html') },
          { from: path.resolve(__dirname, './contentPage.html'), to: path.resolve(__dirname, 'dist/contentPage.html') },
          { from: path.resolve(__dirname, './src/css/'), to: path.resolve(__dirname, 'dist/css') }

        ]),
      ],
    
}

