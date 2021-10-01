const path = require('path')
const chalk = require('chalk')

console.log(chalk.green('file name:') , path.basename(__filename))
console.log(chalk.blue('directory name:') , path.dirname(__filename))
console.log(chalk.yellow('extended name:'), path.extname(__filename)) 

console.log(chalk.redBright('Parse:'), path.parse(__filename))

console.log(path.join(__dirname, 'server', 'index.html'))