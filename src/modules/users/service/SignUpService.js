class SignUpService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data) {
    const { name, email, password } = data;

    const emailAlreadyUsed = await this.usersRepository.findByEmail(email);

    if (emailAlreadyUsed)
      return { error: 'email not available. Choose another' };

    const user = await this.usersRepository.add({ name, email, password });

    return user;
  }
}

module.exports = SignUpService;
