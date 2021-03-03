'use strict';

const CreateUser = require('../usescases/CreateUser');
const User = require('../usescases/domain/User');
const GetAuthentication = require('../usescases/GetAuthentication');
const Authentication = require('../usescases/domain/Authentication');

const GetUserById = require('../usescases/GetUserById');
const UserRepository = require('../repositories/UserRepository');
const FirebaseDaoFactory = require('../repositories/daoFactory/FirebaseDaoFactory');
const UserFirebaseEntityMap = require('../repositories/mapEntities/UserFirebaseEntityMap');
const SendEmailNodeMailer = require('../usescases/SendEmailNodeMailer');

class UserController {
    constructor() {
        this.userRepository = new UserRepository(new FirebaseDaoFactory(), new UserFirebaseEntityMap());
        this.SendEmailNodeMailer = new SendEmailNodeMailer();
    }

    createUser(request, h) {
        const { id, documentnumber, documenttype, firstName, lastName, email, addresses, mobile, gender, birthdate, company } = request.payload;
        const useCase = new CreateUser(this.userRepository, this.SendEmailNodeMailer);
        useCase.setUser(new User(id, documentnumber, documenttype, firstName, lastName, email, addresses,mobile, gender, birthdate, company));
        const response = h.response(useCase.execute()).code(201).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    async getUser(request, h) {
        const idUser = request.params.id;
        const useCase = new GetUserById(this.userRepository);
        useCase.setIdUser(idUser);
        return await useCase.execute();
    }

    async getAuthentication(request, h) {
        const { login, secretkey, endpoint } = request.payload;
        const useCase = new GetAuthentication();
        const authentication = new Authentication(login, secretkey, endpoint)
        useCase.setAuthentication(authentication);
        const response = h.response(useCase.execute()).code(201).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }
}

module.exports = UserController;
