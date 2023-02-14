import { Router } from 'express';
import CarController from '../Controllers/CarController';
import { CarExists, NotFoundCar } from '../Middlewares/ErrorHandler';

const routes = Router();
routes.get(
  '/cars/:id',
  NotFoundCar,
  CarExists,
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.put(
  '/cars/:id',
  NotFoundCar,
  CarExists,
  (req, res, next) => new CarController(req, res, next).updateCar(),
);

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAllCars(),
);

export default routes;
