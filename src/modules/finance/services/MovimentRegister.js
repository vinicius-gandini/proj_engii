class MovimentRegister {
  constructor(movimentRepository) {
    this.movimentRepository = movimentRepository;
  }

  async execute(data) {
    const { user_id, title, type, date, frequency, amount, description } = data;

    const moviment = await this.movimentRepository.add({
      user_id,
      title,
      type,
      date,
      frequency,
      amount,
      description,
    });

    return moviment;
  }
}

module.exports = MovimentRegister;
