const path = require('path')
module.exports = (env, argv) => {
    console.log('+++++++++++++++ env ++++++++++++++')
    console.log(env)
    console.log('+++++++++++++ argv +++++++++++++')
    console.log(argv)
    return {
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].js'
        }
    }
}