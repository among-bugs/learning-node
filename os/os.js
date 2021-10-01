const os = require('os');

console.log('operating system:', os.platform())
console.log('arch:', os.arch())
console.log('cpu:', os.cpus())

console.log('free memory:', (os.freemem() / 1024) / 1024 , 'Mb')
console.log('total memory:', (os.totalmem() / 1024) / 1024 , 'Mb')

console.log('running:', (os.uptime() / 60 / 60) , 'hour')