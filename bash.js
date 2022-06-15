


process.stdout.write('prompt >')

process.stdin.on('data', (data) =>{
    let cmd = data.toString().trim()

    if(cmd === 'pwd'){
        cmd = process.cwd()
    }
    process.stdout.write('you typed: ' + cmd)
    process.stdout.write('\nprompt >')
    
})