import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';
import { CarExists, NotFoundCar, MotoExists } from '../Middlewares/ErrorHandler';

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
routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotors(),
);

routes.get(
  '/motorcycles/:id',
  NotFoundCar,
  MotoExists,
  (req, res, next) => new MotorcycleController(req, res, next).getByIdMoto(),
);

routes.put(
  '/motorcycles/:id',
  NotFoundCar,
  MotoExists,
  (req, res, next) => new MotorcycleController(req, res, next).updateMoto(),
);

export default routes;
