import CriarUserModel from "../models/criarUserModel.js";
import CryptoJS from 'crypto-js';

class CriarUserControleer {
    async acessoUser(req, res) {


        try {
            const recoverySecretKey = process.env['SECRET_KEY_RECOVERY_PASS'] || '';

            const criptSenha = CryptoJS.AES.encrypt(String(req.body.senha), recoverySecretKey).toString();
            req.body.senha = criptSenha
            const resultUser = await CriarUserModel.user(req.body);

            res.status(200).json({ resultUser});

        } catch (error) { // o catch irá identificar o erro caso já tenha um email no banco
            res.status(400).json({ error: error.message }) //capturando a menssagem de erro enviada pelo model
        }
    }

}
export default new CriarUserControleer();