import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  protected id: string | undefined;
  private doorsQty: number;
  private seatsQty: number;

  constructor(Icar: ICar) {
    super(Icar);
    this.id = Icar.id;
    this.doorsQty = Icar.doorsQty;
    this.seatsQty = Icar.seatsQty;
  }

  public setDoorsQty(doorsQty: number): void {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty(): number {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number): void {
    this.seatsQty = seatsQty;
  }

  public getGeatsQty(): number {
    return this.seatsQty;
  }
}

export default Car;