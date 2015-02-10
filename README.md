node ipjs
====

## what is it?
It's a node lib to return your servers public facing IP adress from within nodejs.

## how does it work?
It uses the public ip service provided by Iteam (which by the way is available as http endpoint too: ´curl ip.iteam.se´ ) - see http://ip.iteam.se for reference

The first time you require('ip') the call to the external web service will be issued and after that it will be cached. 

Warning! There is a built-in race condition, if you want to make sure the call is finished and the IP is resolved, please use the promise provided.

## install

    npm install ipjs

## usage

    var ip = require('ipjs');
    ip.then(function(){
        console.log(ip.toString()); // 11.22.33.44
    })

## as singleton

    var ip = require('ipjs');
    ...
    app.get('..', function(req,res){
        res.send(ip.toString());
    })

