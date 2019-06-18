var path = require('path');
module.exports = {
    entry:{
        app: "/src/index.js"
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress:true,
        port:8080
    }
};

