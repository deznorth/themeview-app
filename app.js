const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');

const app = express();
const dev = app.get('env') !== 'production';

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3000);

if(!dev){
    app.disable('x-powered-by');
    app.use(express.static(path.resolve(__dirname, 'build')));
    app.use(compression());
    app.use(morgan('common'));
}

if(dev){
    app.use(express.static(path.resolve(__dirname, 'build')));
    app.use(morgan('dev'));
}

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, err => {
    if (err) throw err;
    console.log('Server successfully started');
});