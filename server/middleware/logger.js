const format = require('date-fns').format;
const fs = require('fs')
const fsPromises = require('fs').promises;
const path = require('path');

// write log in fle 
const writeLogEvents = async (message, logFile)=>{
    const dateTime = `${format(new Date(), 'dd-MM-yyyy\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${message}\n`;
    try{
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFile), logItem);
    }catch{

    }
}

const reqLogger = (req, res, next)=>{
    const message = `${req.method}\t${req.url}\t${req.headers.origin}`;
    writeLogEvents(message, 'requestLog.log');

    next()
}

module.exports= {reqLogger, writeLogEvents}