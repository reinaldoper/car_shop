import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

/* routes.patch(
  '/transfer/:id',
  (req, res, next) => new TransferController(req, res, next).reversalRequest(),
);

routes.post(
  '/key/register',
  (req, res, next) => new KeyController(req, res, next).create(),
);

routes.get(
  '/key/:value',
  (req, res, next) => new KeyController(req, res, next).getByValue(),
);

routes.get(
  '/key/owner/:name',
  (req, res, next) => new KeyController(req, res, next).getByOwner(),
);
 */
export default routes;
