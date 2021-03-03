'use strict';

 class IUserDao{
    constructor() { }

    save(user) {
        // To be overridden in concrete implementation
    }

    remove(idUser) {
        // To be overridden in concrete implementation
    }

    async get(idUser) {
        // To be overridden in concrete implementation
    }

    async all() {
        // To be overridden in concrete implementation
    }
}

module.exports = IUserDao;
