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
  public async getByValue(_id: string): Promise<(Car | null)> {
    const carODM = new CarODM();
    const car = await carODM.findByValue(_id);
    const result = this.createCarDomain(car);
    return result;
  }

  public async deleteCar(_id: string): Promise<(Car | null)> {
    const carODM = new CarODM();
    const car = await carODM.delete(_id);
    const result = this.createCarDomain(car);
    return result;
  }

  public async getAllCars(): Promise<(Car | null)[]> {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const result = cars.map((key: ICar) => this.createCarDomain(key));
    return result;
  }

  public async update(id: string, car: ICar) {
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