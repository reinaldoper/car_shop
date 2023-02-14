import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarServices';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }

  public async deleteByIdCar() {
    const { id } = this.req.params;
    try {
      const result = await this.service.deleteCar(id);
      
      if (result) {
        return this.res.status(204).json({ });
      }
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    const car = await this.service.getByValue(id);
    return this.res.status(200).json(car);
  }

  public async getAllCars() {
    const cars = await this.service.getAllCars();
    return this.res.status(200).json(cars);
  }

  public async updateCar() {
    const car: ICar = {
      ...this.req.body,
    };
    const { id } = this.req.params;
    try {
      await this.service.update(id, car);
      const newCar = await this.service.getByValue(id);
      return this.res.status(200).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
