import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(Iveicle: IVehicle) {
    this.id = Iveicle.id;
    this.model = Iveicle.model;
    this.year = Iveicle.year;
    this.color = Iveicle.color;
    this.status = Iveicle.status;
    this.buyValue = Iveicle.buyValue;
  }
}

export default Vehicle;