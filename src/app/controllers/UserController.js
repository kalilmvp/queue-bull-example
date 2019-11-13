import Mail from "../lib/Mail";
import Queue from "../lib/Queue";

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email
    };

    await Queue.add("RegistrationMail", { user });
    await Queue.add("UserReport", { user });

    return res.json(user);
  }
};
