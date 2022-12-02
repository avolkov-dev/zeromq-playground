import * as zeromq from 'zeromq'

const address ='tcp://192.168.2.73:29000';
const pub = zeromq.socket('pub');
pub.bind(address);
setInterval(function(){
    console.log('.')
    pub.send(['rawtx','andrey'])
}, 500);
