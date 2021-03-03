const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode:"development",
    entry:"./src/js/index.js",
    output:{
        filename:"js/bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    devtool:"inline-source-map",
    devServer:{
        contentBase:"./src",
        watchContentBase:true,
        port:3232,
        open:true
        
    },
    module:{
        rules:[
            {
                test:/\.(svg|png|jpeg|jpg|ico)$/,
                loader:"file-loader",
                exclude:/node_modules/
            },
            {
                test:/\.(s?css)$/,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test:/\.(js)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            ["@babel/preset-env",{
                                useBuiltIns:"entry",
                                corejs:{
                                    version:"3.9"
                                }
                            }]
                        ],
                        plugins:[
                            ["@babel/plugin-proposal-pipeline-operator", {
                                proposal:"minimal"
                            }]
                        ]
                    }
                }
            }

        ]
    },
    plugins:[
        new webpack.ProvidePlugin({

        })
    ]
}