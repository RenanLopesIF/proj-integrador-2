import nodemailer from 'nodemailer';
import usuariosModel from '../models/usuariosModel.js';
import CryptoJS from 'crypto-js';

class AuthController {
  async login(req, res) {
    try {
      let result = 'teste';

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(403).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async changePasswordFromMailToRecovery(req, res) {
    const { userIdToken } = req.params;
    const { senha } = req.body;
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

    const currentUser = await usuariosModel.getUserByEmail({ email });
    const encryptedID = CryptoJS.AES.encrypt(String(currentUser.ID), recoverySecretKey).toString();

    const recoveryLink = `http://localhost:3004/recuperar-senha/nova-senha/${encodeURIComponent(encryptedID)}`;
    console.log(recoveryLink);
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
}

export default new AuthController();
