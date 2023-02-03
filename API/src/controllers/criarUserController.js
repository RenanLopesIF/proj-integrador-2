import CriarUserModel from "../models/criarUserModel.js";

class CriarUserControleer {
    async acessoUser(req, res) {


        try {
            const resultCred = await CriarUserModel.credUser(req.body);
            const resultUser = await CriarUserModel.user(req.body);
            
            res.status(200).json({ resultUser, resultCred });

        } catch (error) { // o catch irá identificar o erro caso já tenha um email no banco
            res.status(400).json({ error: error.message }) //capturando a menssagem de erro enviada pelo model
        }
    }

}
export default new CriarUserControleer();