import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(
        moto,
      );
    }
    return null;
  }

  public async create(moto: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const newMoto = await motoODM.create(moto);
    return this.createMotorcycleDomain(newMoto);
  }

  public async getByValue(_id: string): Promise<(Motorcycle | null)> {
    const motoODM = new MotorcycleODM();
    const moto = await motoODM.findByValue(_id);
    const result = this.createMotorcycleDomain(moto);
    return result;
  }

  public async getAllMotors(): Promise<(Motorcycle | null)[]> {
    const motoODM = new MotorcycleODM();
    const cars = await motoODM.getAll();
    const result = cars.map((key: IMotorcycle) => this.createMotorcycleDomain(key));
    return result;
  }

  public async update(id: string, moto: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    return motorcycleODM.update(id, moto);
  }
}

export default MotorcycleService;
/* id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number, */