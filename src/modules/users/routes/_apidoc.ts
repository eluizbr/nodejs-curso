/**
 * @api {GET} /users/?page=NUMBER&limit=NUMBER  GetAllUsers
 * @apiName GetAllUsers
 * @apiGroup Users
 * @apiVersion  1.0.0
 * @apiPermission admin
 * @apiSampleRequest off
 *
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiDescription Este endpiont tem como objetivo
 * listar todos os usuários da API.
 *
 * @apiParam {Number} [page=1]      Página a ser retornada
 * @apiParam {Number} [limite=10]   Limite a ser retornado por página
 *
 * @apiHeaderExample {json} Header:
 *     {
 *       "Content-Type": "application/json"
 *     }
 *
 * @apiSuccess {Object[]} usuario             Lista com todos os usuários.
 * @apiSuccess {Boolean}  usuario.isActive    Usuário esta ou não ativo.
 * @apiSuccess {String}   usuario._id         ID do usuário.
 * @apiSuccess {String}   usuario.email       Email do usuário.
 * @apiSuccess {String}   usuario.password    Password do usuário.
 * @apiSuccess {String}   usuario.name    name de acesso.
 * @apiSuccess {Date}     usuario.createdAt   Data de criação.
 * @apiSuccess {Date}     usuario.updatedAt   Data da última atualização.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "docs": [
 *              {
 *                  "isActive": true,
 *                  "_id": "5ace9cfd3907932c7cadba83",
 *                  "email": "eluizbr@gmail.com",
 *                  "username": "Emerson Luiz",
 *                  "createdAt": "2018-04-11T23:40:46.876Z",
 *                  "updatedAt": "2018-04-11T23:40:46.876Z",
 *                  "__v": 0
 *              }
 *          ],
 *          "total": 1,
 *          "limit": 10,
 *          "page": 1,
 *          "pages": 1
 *      }
 */

/**
 * @api {GET} /users/:id GetUserByID
 * @apiName GetUserByID
 * @apiGroup Users
 * @apiVersion  1.0.0
 * @apiPermission admin
 * @apiSampleRequest off
 *
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiDescription Este endpiont tem como objetivo
 * retorna um usuário com base no ID enviado.
 *
 * @apiParam {String} id  ID do usuário.
 *
 * @apiHeaderExample {json} Header:
 *     {
 *       "Content-Type": "application/json"
 *     }
 *
 * @apiSuccess {Object}   usuario             Objeto com o usuário.
 * @apiSuccess {Boolean}  usuario.isActive    Usuário esta ou não ativo.
 * @apiSuccess {String}   usuario._id         ID do usuário.
 * @apiSuccess {String}   usuario.email       Email do usuário.
 * @apiSuccess {String}   usuario.password    Password do usuário.
 * @apiSuccess {String}   usuario.name        Name de acesso.
 * @apiSuccess {Date}     usuario.createdAt   Data de criação.
 * @apiSuccess {Date}     usuario.updatedAt   Data da última atualização.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "isActive": true,
 *          "_id": "5ab9a3f9adfeee05e79fae97",
 *          "email": "email@gmail.com",
 *          "password": "$2a$10$ZiBKrcZQsZScFkfBrPBepeYCqlM5mzo/sIpzwk7MvRbqhRUkFTpfO",
 *          "name": "Jose Silva",
 *          "createdAt": "2018-03-27T01:52:57.361Z",
 *         "updatedAt": "2018-03-27T01:52:57.361Z",
 *         "__v": 0
 *      }
 *
 * @apiError {Object} UserNotFound The <code>id</code> of the User was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "statusCode": 404,
 *        "message": "User not found"
 *     }
 */

/**
 * @api {POST} /users/:id CreateUser
 * @apiName CreateUser
 * @apiGroup Users
 * @apiVersion  1.0.0
 * @apiPermission admin
 * @apiSampleRequest off
 *
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiDescription Este endpiont tem como objetivo
 * Criar um novo usuário.
 *
 * @apiParam {String} email     Email do usuário.
 * @apiParam {String} password  Senha do usuário.
 * @apiParam {String} name  Username de acesso do usuário.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "teste@gmail.com",
 *       "password": "123456",
 *       "name": "Jose Silva"
 *     }
 *
 * @apiHeaderExample {json} Header:
 *     {
 *       "Content-Type": "application/json"
 *     }
 *
 * @apiSuccess {Object}   usuario             Objeto com o usuário.
 * @apiSuccess {Boolean}  usuario.isActive    Usuário esta ou não ativo.
 * @apiSuccess {String}   usuario._id         ID do usuário.
 * @apiSuccess {String}   usuario.email       Email do usuário.
 * @apiSuccess {String}   usuario.password    Password do usuário.
 * @apiSuccess {String}   usuario.name        Username de acesso.
 * @apiSuccess {Date}     usuario.createdAt   Data de criação.
 * @apiSuccess {Date}     usuario.updatedAt   Data da última atualização.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *      {
 *          "isActive": true,
 *          "_id": "5ab9a3f9adfeee05e79fae97",
 *          "email": "email@gmail.com",
 *          "password": "$2a$10$ZiBKrcZQsZScFkfBrPBepeYCqlM5mzo/sIpzwk7MvRbqhRUkFTpfO",
 *          "name": "Jose Silva",
 *          "createdAt": "2018-03-27T01:52:57.361Z",
 *         "updatedAt": "2018-03-27T01:52:57.361Z",
 *         "__v": 0
 *      }
 *
 * @apiError {Array} ValidatorErrorThe Erros de validação.
 *
 * @apiErrorExample {Array} Error-Response:
 *     HTTP/1.1 409 Not Found
 *       [
 *           {
 *               "title": "password",
 *               "type": "ValidatorError",
 *               "body": "Error, A senha deve conter 6 digitos",
 *               "status": 409
 *           },
 *           {
 *               "title": "email",
 *               "type": "ValidatorError",
 *               "body": "Error, o email teste@gmail.com já esta em uso por outro usuário.",
 *               "status": 409
 *           },
 *           {
 *              "title": "name",
 *              "type": "ValidatorError",
 *              "body": "Error, o name Jose Silva já esta em uso por outro usuário.",
 *              "status": 409
 *          }
 *      ]
 */

/**
 * @api {PATCH} /users/:id UpdateUser
 * @apiName UpdateUser
 * @apiGroup Users
 * @apiVersion  1.0.0
 * @apiPermission admin
 * @apiSampleRequest off
 *
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiDescription Este endpiont tem como objetivo
 * Criar um novo usuário.
 *
 * @apiParam {String} [email]     Email do usuário.
 * @apiParam {String} [password]  Senha do usuário.
 * @apiParam {String} [name]      Username de acesso do usuário.
 * @apiParam {Boolean} [isActive] Ativa ou desativa o usuário
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "teste@gmail.com",
 *       "password": "123456",
 *       "name": "Jose Silva"
 *       "isActive": true
 *     }
 *
 * @apiHeaderExample {json} Header:
 *     {
 *       "Content-Type": "application/json"
 *     }
 *
 * @apiSuccess {Object}   message           Menssagem de sucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *      {
 *          "title": "Success",
 *          "message": "O usuário Jose Silva, foi atualizado com sucesso.",
 *          "color": "white",
 *          "icon": "fa fa-check",
 *          "iconColor": "green",
 *          "position": "bottomCenter",
 *          "layout": 2,
 *          "balloon": true,
 *          "pauseOnHover": false
 *      }
 *
 * @apiError {Array} ValidatorErrorThe Erros de validação.
 *
 * @apiErrorExample {Array} Error-Response:
 *     HTTP/1.1 409 Not Found
 *       [
 *           {
 *               "title": "password",
 *               "type": "ValidatorError",
 *               "body": "Error, A senha deve conter 6 digitos",
 *               "status": 409
 *           },
 *           {
 *               "title": "email",
 *               "type": "ValidatorError",
 *               "body": "Error, o email teste@gmail.com já esta em uso por outro usuário.",
 *               "status": 409
 *           },
 *           {
 *              "title": "name",
 *              "type": "ValidatorError",
 *              "body": "Error, o name Jose Silva já esta em uso por outro usuário.",
 *              "status": 409
 *          }
 *      ]
 */

/**
 * @api {DELETE} /users/:id RemoveUserByID
 * @apiName RemoveUserByID
 * @apiGroup Users
 * @apiVersion  1.0.0
 * @apiPermission admin
 * @apiSampleRequest off
 *
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiDescription Este endpiont tem como objetivo
 * remover um usuário com base no ID enviado.
 *
 * @apiParam {String} id  ID do usuário.
 *
 * @apiHeaderExample {json} Header:
 *     {
 *       "Content-Type": "application/json"
 *     }
 *
 * @apiSuccess {Object} success User removed.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "statusCode": 200,
 *          "message": "User removed"
 *      }
 *
 * @apiError {Object} UserNotFound User not found
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "statusCode": 404,
 *        "message": "User not found"
 *     }
 */
