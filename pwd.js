
    module.exports = ( (cmd) => {
        if(cmd === 'pwd'){
            return process.cwd()
        }
        else {
            return cmd;
        }
    }
    )