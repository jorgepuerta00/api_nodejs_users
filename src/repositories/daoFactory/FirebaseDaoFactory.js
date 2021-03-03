'use strict';

const userFirebaseDao = require('../firebasePersistence/UserFirebaseDao');

class FirebaseDaoFactory {

    getUserDao() {
        return userFirebaseDao;
    }
}

module.exports =  FirebaseDaoFactory;