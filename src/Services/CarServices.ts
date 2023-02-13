import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM ';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async createId(id: string, car: ICar) {
    const carODM = new CarODM();
    return carODM.update(id, car);
  }
}

export default CarService;
/* id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number, */