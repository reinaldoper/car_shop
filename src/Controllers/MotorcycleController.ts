import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }
  public async create() {
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMoto = await this.service.create(moto);
      return this.res.status(201).json(newMoto);
    } catch (err) {
      this.next(err);
    }
  }

  public async getAllMotors() {
    const motors = await this.service.getAllMotors();
    return this.res.status(200).json(motors);
  }

  public async getByIdMoto() {
    const { id } = this.req.params;
    const moto = await this.service.getByValue(id);
    return this.res.status(200).json(moto);
  }
  public async deleteByIdMoto() {
    const { id } = this.req.params;
    try {
      const result = await this.service.deleteMoto(id);
      
      if (result) {
        return this.res.status(204).json({ });
      }
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMoto() {
    const moto: IMotorcycle = {
      ...this.req.body,
    };
    const { id } = this.req.params;
    try {
      await this.service.update(id, moto);
      const newMoto = await this.service.getByValue(id);
      return this.res.status(200).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;
