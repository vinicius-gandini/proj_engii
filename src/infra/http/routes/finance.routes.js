const { Router } = require('express');
const movimentController = require('../../../modules/finance/controllers/movimentController');
const authenticated = require('../middlewares/authenticated');

const financeRouter = Router();

financeRouter.get('/moviment', authenticated, movimentController.index);
financeRouter.get('/moviment/:id', authenticated, movimentController.show);
financeRouter.post('/moviment', authenticated, movimentController.create);
financeRouter.delete('/moviment/:id', authenticated, movimentController.delete);

module.exports = financeRouter;
