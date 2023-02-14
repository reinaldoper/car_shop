import {
  Model,
  models,
  Schema,
  UpdateQuery,
  model,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findByValue(_id: string): Promise<(T | null)> {
    return this.model.findOne({ _id });
  }

  public async delete(_id: string): Promise<(T | null)> {
    const result = await this.model.findByIdAndDelete({ _id });
    return result;
  }

  public async getAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default AbstractODM;
