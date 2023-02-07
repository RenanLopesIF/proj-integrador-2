import nodemailer from 'nodemailer';
import usuariosModel from '../models/usuariosModel.js';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';

class AuthController {
  async changePasswordFromMailToRecovery(req, res) {
    const { senha, userIdToken } = req.body;
    const recoverySecretKey = process.env['SECRET_KEY_RECOVERY_PASS'] || '';

    try {
      const decryptedID = CryptoJS.AES.decrypt(decodeURIComponent(userIdToken), recoverySecretKey).toString(
        CryptoJS.enc.Utf8,
      );

      const result = await usuariosModel.updatePasswordById({ senha, id: decryptedID });

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async sendMailToRecoveryPassword(req, res) {
    const { email } = req.body;
    const recoverySecretKey = process.env['SECRET_KEY_RECOVERY_PASS'] || '';
    const frontEndRoutePath = `http://localhost:3000`;

    const currentUser = await usuariosModel.getUserByEmail({ email });
    const encryptedID = CryptoJS.AES.encrypt(String(currentUser.ID), recoverySecretKey).toString();

    const recoveryLink = `${frontEndRoutePath}/recuperar-senha/nova-senha/${encodeURIComponent(encryptedID)}`;
    const mailName = email.split('@')[0];

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: process.env['EMAIL'],
          pass: process.env['EMAIL_APP_KEY'],
        },
      });

      const mailOptions = {
        from: 'FestFinder',
        to: email,
        subject: 'Recuperação de senha',
        html: `<main>
          <p>Olá, ${mailName}</p>
          <p>
            <span>Alguém solicitou recentemente uma alteção de senha da sua conta do FestFinder. Se foi você, clique no botão
              abaixo para redefinir sua senha.
            </span>
          </p>

          <br />
          <button
            style="background-color: #FC5185; padding: 10px 10px; color: white; cursor: pointer; border: 2px solid #FFF; border-radius: 4px;"><a
              style="text-decoration: inherit; color: inherit" href="${recoveryLink}">Definir senha de acesso</a></button>
          <br />

          <p>Se não quiser alterar a senha ou não tiver feito essa solicitação, basta ignorar e excluir esta mensagem</p>
          <span>Para manter sua conta segura, não encaminhe este e-mail para ninguém.</span>
        </main>`,
      };

      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          throw new Error(error);
        } else {
          res.status(200).send({ message: 'sucesso' });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }
  async inserirUser(req, res) {
    try {
      const recoverySecretKey = process.env['SECRET_KEY_RECOVERY_PASS'] || '';

      const criptSenha = CryptoJS.AES.encrypt(String(req.body.senha), recoverySecretKey).toString();
      req.body.senha = criptSenha;
      const resultUser = await usuariosModel.insertOne(req.body);

      res.status(200).json({ resultUser });
    } catch (error) {
      // o catch irá identificar o erro caso já tenha um email no banco
      res.status(400).json({ error: error.message }); //capturando a menssagem de erro enviada pelo model
    } finally {
      res.end();
    }
  }
  async login(req, res) {
    // metodo para autenticar o user
    try {
      // estrutura de controle para capturar erros
      // código abaixo compara os dados na requisição com o banco e armazena o resultado na variavel 'result'
      const result = await usuariosModel.authenticat({ login: req.body.login, senha: req.body.senha });
      const curUser = await usuariosModel.getUserById({ userId: result[0].id_usuario });
      console.log(curUser);
      if (result.length) {
        // verificação se existe um usuario no banco
        const privateKey = process.env['JWT_KEY'];

        const token = jwt.sign(curUser, privateKey);
        console.log(token);
        res.status(200).send({ token: token }); //caso exista
      } else {
        res.status(401).send({ message: 'Usuário ou senha invalidos!' }); //caso não exista
      }
    } catch (error) {
      // utilizado para capturar qualquer erro durante a execução do código que está dentro do try
      console.log(error); // imprime o erro no console
      res.status(400).send({ menssage: 'Erro ao autenticar usuário' }); // envia uma resposta
    } finally {
      //finalizando a estrutura para capturar erros
      //o finally possibilita que seja executado o código abaixo mesmo se der erro ou não
      res.end(); // finaliza a execução
    }
  }
}

export default new AuthController();
