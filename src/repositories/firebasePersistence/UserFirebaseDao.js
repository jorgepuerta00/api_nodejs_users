'use strict';

const IUserDao = require('../interfaces/IUserDao');
const FirebaseConnection = require('./FirebaseConnection');

class UserFirebaseDao extends IUserDao {

    constructor() {
        super();
        this.firebaseConnection = new FirebaseConnection();
        this.db = this.firebaseConnection.getFirebaseContextDb();
    }

    save(user) {
        try {
            this.db.collection('users').doc(user.id).set(user).then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            }).catch(function (error) {
                console.error("Error adding document: ", error);
            });
        }
        catch (err) {
            console.log(err);
        }
        return user;
    }

    remove(idUser) {

    }

    async get(idUser) {
        var data;
        await this.db.collection("users").doc(idUser).get().then(function (doc) {
            if (doc.exists) {
                data = doc.data();
            } else {
                data = {};
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        return Promise.resolve(data);
    }

    async all() {

    }
}

const instance = new UserFirebaseDao()
Object.freeze(instance);

module.exports = instance;
