import * as zeromq from 'zeromq'

const address ='tcp://127.0.0.1:29000';
const pub = zeromq.socket('pub');
pub.bind(address);
setInterval(function(){
    console.log('. pub')
    pub.send(['rawtx','andrey'])
}, 500);
