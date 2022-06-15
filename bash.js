

let pwd = require('./pwd')
let ls = require('./ls');

process.stdout.write('prompt >')

process.stdin.on('data', (data) =>{
    let cmd = data.toString().trim()
    cmd = pwd(cmd);
    cmd = ls(cmd)

    process.stdout.write('you typed: ' + cmd)
    process.stdout.write('\nprompt >')
    
})