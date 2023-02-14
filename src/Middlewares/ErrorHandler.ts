import { Request, Response, NextFunction } from 'express';
import Mongose from 'mongoose';
import CarODM from '../Models/CarODM ';
import MotorcycleODM from '../Models/MotorcycleODM';

const CarExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params;
  const car = await new CarODM().findByValue(id);

  if (!car) {
    res.status(404).json({ message: 'Car not found' });
    return;
  }

  next();
};

const MotoExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params;
  const moto = await new MotorcycleODM().findByValue(id);

  if (!moto) {
    res.status(404).json({ message: 'Motorcycle not found' });
    return;
  }

  next();
};

const NotFoundCar = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  if (!Mongose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ message: 'Invalid mongo id' });
    return;
  }

  next();
};

export { NotFoundCar, CarExists, MotoExists };