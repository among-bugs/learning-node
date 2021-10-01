const chalk = require('chalk');
const data = require('./data');

const settingColors = [
    chalk.blue,
    chalk.blue,
    chalk.blue,
    chalk.yellow,
    chalk.yellow,
    chalk.yellow
];

settingColors.forEach((item) => {
    console.log(item(data));
})