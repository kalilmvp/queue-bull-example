import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue test <queue@queue.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de Usuário",
      html: `Olá ${user.name}, bem-vindo ao time`
    });
  }
};
