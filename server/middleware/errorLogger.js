const {writeLogEvents} = require('./logger')


const errLogger = (err, req, res, next)=>{
    const message = `${err.name}\t${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`;
    writeLogEvents(message, 'errLog.log');
    console.log(err.stack);

    const status = res.statusCode? res.statusCode: 500;
    res.status(status);

    res.json({message: err.message});
    next()
}

module.export =errLogger;