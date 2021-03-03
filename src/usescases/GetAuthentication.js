"use strict";

const crypto = require("crypto");
const base64 = require("base-64");

class GetAuthentication {
    constructor() {
        
    }

    setAuthentication(authentication) {
        this.authentication = authentication;
    }

    getLogin() {
        return this.authentication.login;
    }

    getNonce() {
        return base64.encode(this.authentication.nonce);
    }

    getTrankey() {
        return crypto
            .createHash("sha1")
            .update(this.authentication.nonce + this.authentication.fecha.toISOString() + this.authentication.secretkey)
            .digest("base64");
    }

    getSeed() {
        return this.authentication.fecha.toISOString();
    }

    execute() {
        return {
            auth: {
                    login: this.getLogin(),
                    tranKey: this.getTrankey(),
                    nonce: this.getNonce(),
                    seed: this.getSeed(),
                }
        };
    }
};


module.exports = GetAuthentication;