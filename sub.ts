import * as zeromq from 'zeromq'

//https://bitcoindev.network/accessing-bitcoins-zeromq-interface/
const address ='tcp://127.0.0.1:29000'
const sub = zeromq.socket('sub');
sub.connect(address);
sub.subscribe('rawtx')

sub.on('message', function(topic, message) {
    console.log(`received [${message}]`)
});

setInterval(function(){
    console.log('. sub')
}, 500);
