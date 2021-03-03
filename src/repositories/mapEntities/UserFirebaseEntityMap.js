'use strict';

const UserFirebaseEntity = require('../entities/UserFirebaseEntity');
const User = require('../../usescases/domain/User');

const _serializeSingleUserEntity = (entity) => {
    var firebaseEntity = new UserFirebaseEntity(
        entity.id,
        entity.documentnumber,
        entity.documenttype,
        entity.firstName,
        entity.lastName,
        entity.email,
        entity.addresses,
        entity.mobile, 
        entity.gender,
        entity.birthdate,
        entity.company
    );
    return JSON.parse(JSON.stringify(firebaseEntity));
};

const _serializeSingleUser = (entity) => {
    return new User(
        entity.id,
        entity.documentnumber,
        entity.documenttype,
        entity.firstName,
        entity.lastName,
        entity.email,
        entity.addresses,
        entity.mobile, 
        entity.gender,
        entity.birthdate,
        entity.company
    );
}

module.exports = class UserFirebaseEntityMap {
    serializeToEntity(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUserEntity);
        }
        return _serializeSingleUserEntity(data);
    }

    serializeToUser(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUser);
        }
        return _serializeSingleUser(data);
    }
};
