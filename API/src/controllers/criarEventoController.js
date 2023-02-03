import CriarEventoModel from "../models/criarEventoModel.js";

class CriarEventoController{
    async criarEvento(req,res){
        try{
            const dadosEvento = await CriarEventoModel.dadosEvento(req.body);
            res.status(200).send({ message: 'success' });
        }catch (error){
            res.status(400).json({error:error.message})
        }
    }
}

export default new CriarEventoController();