import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';
import { CarExists, NotFoundCar, MotoExists } from '../Middlewares/ErrorHandler';

const URL_MOTO_ID = '/motorcycles/:id';
const URL_CAR_ID = '/cars/:id';

const routes = Router();

routes.delete(
  URL_MOTO_ID,
  NotFoundCar,
  MotoExists,
  (req, res, next) => new MotorcycleController(req, res, next).deleteByIdMoto(),
);

routes.delete(
  URL_CAR_ID,
  NotFoundCar,
  CarExists,
  (req, res, next) => new CarController(req, res, next).deleteByIdCar(),
);

routes.get(
  URL_CAR_ID,
  NotFoundCar,
  CarExists,
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.put(
  URL_CAR_ID,
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
  URL_MOTO_ID,
  NotFoundCar,
  MotoExists,
  (req, res, next) => new MotorcycleController(req, res, next).getByIdMoto(),
);

routes.put(
  URL_MOTO_ID,
  NotFoundCar,
  MotoExists,
  (req, res, next) => new MotorcycleController(req, res, next).updateMoto(),
);

export default routes;
