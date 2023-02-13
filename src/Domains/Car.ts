import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(Icar: ICar) {
    this.id = Icar.id;
    this.model = Icar.model;
    this.year = Icar.year;
    this.color = Icar.color;
    this.status = Icar.status;
    this.buyValue = Icar.buyValue;
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