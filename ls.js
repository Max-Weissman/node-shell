const fs = require('fs');

module.exports = ( (cmd) => {
        if(cmd === 'ls'){
            return fs.readdir('./', 'utf8', (err,file) => {
                if (err){
                    throw err;
                }
                else{
                    process.stdout.write(file.join('\n'))
                    process.stdout.write('prompt >');
                }
            })
        }
        else {
            return cmd;
        }
    }
    )