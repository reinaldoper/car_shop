import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Busca motos cadastradas', function () {
  const MOTO = 'Honda Cb 600f Hornet';
  const moto: IMotorcycle = {
    model: MOTO,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Custom',
    engineCapacity: 600,
  };
  const motoOutput: IMotorcycle = {
    id: '6348513f34c397abcad040b2',
    model: MOTO,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };
  it('Retorna moto por ID', async function () {
    const keyOutput = new Motorcycle(moto);
    sinon.stub(Model, 'findOne').resolves(keyOutput);

    const service = new MotorcycleService();
    const result = await service.getByValue('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(keyOutput);

    sinon.restore();
  });
  it('Deleta uma moto pelo ID', async function () {
    const keyOutput: Motorcycle = new Motorcycle(motoOutput);
    sinon.stub(Model, 'findByIdAndDelete').resolves(keyOutput);

    const service = new MotorcycleService();
    await service.deleteMoto('6348513f34c397abcad040b2');

    expect(204).to.be.deep.equals(204);

    sinon.restore();
  });
  it('Retorna erro com ID inválido', async function () {
    sinon.stub(Model, 'findOne').resolves(null);
    try {
      const service = new MotorcycleService();
      await service.getByValue('6348513f34c397abcad040b2xxx');
    } catch (error) {
      expect(error as Error).to.be.deep.equal({ message: 'Invalid mongo id' });
    }

    sinon.restore();
  });
  it('Retorna erro com ID inexistente', async function () {
    sinon.stub(Model, 'findOne').resolves(null);
    try {
      const service = new MotorcycleService();
      await service.getByValue('6348513f34c397abcad040b1');
    } catch (error) {
      expect(error as Error).to.be.deep.equal({ message: 'Motorcycle not found' });
    }

    sinon.restore();
  });
  it('Cadastrar moto', async function () {
    const keyOutput = new Motorcycle(motoOutput);
    sinon.stub(Model, 'create').resolves(keyOutput);

    const service = new MotorcycleService();
    const result = await service.create(moto);

    expect(result).to.be.deep.equal(motoOutput);

    sinon.restore();
  });
  it('Retorna lista de motos', async function () {
    const motors: IMotorcycle[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
    const keyOutput = motors.map((motos) => new Motorcycle(motos));
    sinon.stub(Model, 'find').resolves(motors);

    const service = new MotorcycleService();
    const result = await service.getAllMotors();

    expect(result).to.be.deep.equal(keyOutput);

    sinon.restore();
  });
});