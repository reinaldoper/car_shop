import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  protected id: string | undefined;
  private category: string;
  private engineCapacity: number;

  constructor(
    IMoto: IMotorcycle,
  ) {
    super(IMoto);
    this.category = IMoto.category;
    this.engineCapacity = IMoto.engineCapacity;
    this.id = IMoto.id;
  }

  public setCategory(Category: string): void {
    this.category = Category;
  }

  public getCategory(): string {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }
}

export default Motorcycle;