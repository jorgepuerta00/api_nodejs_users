'use strict';

class Authentication {
    constructor(login, secretkey, endpoint) {
        this.login = login;
        this.secretkey = secretkey;
        this.endpoint = endpoint;
        this.fecha = new Date();
        this.nonce = makeid();
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 32; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

module.exports = Authentication;