import LoginUserModel from "../models/loginUserModel.js";
import jwt from "jsonwebtoken";
import 'dotenv/config';

class LoginUserController {
    async authenticate(req, res) { // metodo para autenticar o user
        try { // estrutura de controle para capturar erros
            // código abaixo compara os dados na requisição com o banco e armazena o resultado na variavel 'result'
            const result = await LoginUserModel.authenticat({ login: req.body.login, senha: req.body.senha });
            console.log(result)
            if (result.length) { // verificação se existe um usuario no banco
                const privateKey = process.env['JWT_KEY']

                const token = jwt.sign({ ID: result[0].id_usuario }, privateKey);
                console.log(token)
                res.status(200).send({ token: token }); //caso exista
            } else {
                res.status(401).send({ message: 'Usuário ou senha invalidos!' }) //caso não exista
            }
        } catch (error) { // utilizado para capturar qualquer erro durante a execução do código que está dentro do try
            console.log(error); // imprime o erro no console
            res.status(400).send({ menssage: 'Erro ao autenticar usuário' }); // envia uma resposta

        } finally { //finalizando a estrutura para capturar erros
            //o finally possibilita que seja executado o código abaixo mesmo se der erro ou não
            res.end(); // finaliza a execução
        }
    }
}
export default new LoginUserController();