const { Router } = require('express');
const entryController = require('../../../modules/finance/controllers/movimentController');
const authenticated = require('../middlewares/authenticated');

const financeRouter = Router();

financeRouter.post('/moviment', authenticated, entryController.create);
financeRouter.delete('/moviment/:id', authenticated, entryController.delete);

module.exports = financeRouter;
