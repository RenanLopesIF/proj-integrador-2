import nodemailer from 'nodemailer';
import UsuariosModel from '../models/usuariosModel.js';
import CryptoJS from 'crypto-js';
import encodeJwt from '../utils/encodeJwt.js';
import decodeJwt from '../utils/decodeJwt.js';

class AuthController {
  async changePasswordFromMailToRecovery(req, res) {
    const { senha, userIdToken } = req.body;
    const recoverySecretKey = process.env['SECRET_KEY_RECOVERY_PASS'] || '';

    try {
      const criptSenha = CryptoJS.AES.encrypt(String(senha), recoverySecretKey).toString();
      const decryptedID = CryptoJS.AES.decrypt(decodeURIComponent(userIdToken), recoverySecretKey).toString(
        CryptoJS.enc.Utf8,
      );

      const result = await UsuariosModel.updatePasswordById({ senha: criptSenha, id: decryptedID });

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

    const currentUser = await UsuariosModel.getUserByEmail({ email });
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
      const resultUser = await UsuariosModel.insertOne(req.body);

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
    const recoverySecretKey = process.env['SECRET_KEY_RECOVERY_PASS'] || '';
    try {
      const chekoutLogin = await UsuariosModel.checkpasswordUserLogin({ login: req.body.login });
      const criptSenha = CryptoJS.AES.decrypt(chekoutLogin[0].senha, recoverySecretKey);
      const decryptSenha = criptSenha.toString(CryptoJS.enc.Utf8);

      if (criptSenha.length === 0 || decryptSenha != req.body.senha) {
        res.status(401).send({ message: 'Usuário ou senha invalidos!' });
        return;
      }

      const result = await UsuariosModel.authenticat({ login: req.body.login, senha: decryptSenha });
      const curUser = await UsuariosModel.getUserById({ userId: result[0].id_usuario });
      if (curUser) {
        // verificação se existe um usuario no banco

        const token = encodeJwt(curUser);
        res.status(200).send({ data: curUser, token: token }); //caso exista
      } else {
        res.status(402).send({ message: 'Usuário  invalidos!' }); //caso não exista
      }
    } catch (error) {
      // utilizado para capturar qualquer erro durante a execução do código que está dentro do try
      console.log(error); // imprime o erro no console
      res.status(400).send({ message: 'Erro ao autenticar usuário' }); // envia uma resposta
    } finally {
      //finalizando a estrutura para capturar erros
      //o finally possibilita que seja executado o código abaixo mesmo se der erro ou não
      res.end(); // finaliza a execução
    }
  }

  async decodeToken(req, res) {
    const token = req.body.token;

    if (!token) {
      res.status(401).send({ message: 'token inválido' });
      res.end();
      return;
    }

    const resDecode = decodeJwt(token);
    if (!token || resDecode.status === 'error') {
      res.status(401).send({ message: 'token inválido' });
      res.end();
      return;
    }

    const result = await UsuariosModel.getUserById({ userId: resDecode.data.ID });
    res.status(200).send({ data: result });
    res.end();
  }

  async getUserCredentials(req, res) {
    const userToken = req.headers['user-token'];
    const recoverySecretKey = process.env['SECRET_KEY_RECOVERY_PASS'] || '';

    if (!userToken) {
      res.status(401).send({ message: 'token inválido' });
      res.end();
      return;
    }

    const resDecode = decodeJwt(userToken);
    const userCredentials = await UsuariosModel.getUserCredentials({ userId: resDecode.data.ID });

    const criptSenha = CryptoJS.AES.decrypt(userCredentials[0].senha, recoverySecretKey);
    const decryptSenha = criptSenha.toString(CryptoJS.enc.Utf8);

    res.status(200).send({ login: userCredentials[0].login, senha: decryptSenha });
    res.end();
  }
}

export default new AuthController();
