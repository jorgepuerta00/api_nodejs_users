'use strict';

class UserFirebaseEntity{
    constructor(id = null, documentnumber, documenttype, firstName, lastName, email, addresses, mobile, gender, birthdate, company) {
        this.id = id;
        this.documentnumber = documentnumber;
        this.documenttype = documenttype;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.addresses = addresses;
        this.mobile = mobile;
        this.gender = gender;
        this.birthdate = birthdate;
        this.company = company;
    }
}

module.exports = UserFirebaseEntity;