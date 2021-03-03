'use strict';

const IUserRepository = require('../usescases/repository/IUserRepository');

class UserRepository extends IUserRepository {

    constructor(userDaoFactory, userEntityMap) {
        super();
        this.userDaoFactory = userDaoFactory;
        this.userEntityMap = userEntityMap;
    }

    save(user) {
        const userEntity = this.userEntityMap.serializeToEntity(user);
        const userSource = this.userDaoFactory.getUserDao();   
        return userSource.save(userEntity)
    }

    remove(idUser) {
     
    }

    async get(idUser) {
        const source = this.userDaoFactory.getUserDao();   
        return  this.userEntityMap.serializeToUser(await source.get(idUser));
    }

    async all() {
       
    }
}

module.exports = UserRepository;
