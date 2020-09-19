const SignUpService = require('../service/SignUpService');
const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async create(req, res) {
    const { name, email, password, password_confirm } = req.body;

    if (!name) return res.json({ message: 'name is required' });

    if (!email) return res.json({ message: 'email is required' });

    if (!password) return res.json({ message: 'password is required' });

    if (!password_confirm)
      return res.json({ message: 'password_confirm required' });

    if (password !== password_confirm)
      return res.json({ message: 'password not match' });

    const usersRepository = new UsersRepository();
    const signUpService = new SignUpService({ usersRepository });

    const user = await signUpService.execute({
      name,
      email,
      password,
    });

    return res.json(user);
  }
}

module.exports = new UserController();
