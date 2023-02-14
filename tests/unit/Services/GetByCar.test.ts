import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarServices';

describe('Buscar carros cadastrados', function () {
  const car = {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  };
  const carInput = {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  };
  it('Retorna carro por ID', async function () {
    const keyOutput: Car = new Car(car);
    sinon.stub(Model, 'findOne').resolves(keyOutput);

    const service = new CarService();
    const result = await service.getByValue('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(keyOutput);

    sinon.restore();
  });
  it('Cria um novo carro', async function () {
    const keyOutput: Car = new Car(car);
    sinon.stub(Model, 'create').resolves(keyOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(car);

    sinon.restore();
  });
  it('Deleta um carro pelo ID', async function () {
    const keyOutput: Car = new Car(car);
    sinon.stub(Model, 'findByIdAndDelete').resolves(keyOutput);

    const service = new CarService();
    await service.deleteCar('634852326b35b59438fbea2f');

    expect(204).to.be.deep.equals(204);

    sinon.restore();
  });
  it('Retorna erro com ID inválido', async function () {
    sinon.stub(Model, 'findOne').resolves(null);
    try {
      const service = new CarService();
      await service.getByValue('634852326b35b59438fbea2fxxxx');
    } catch (error) {
      expect(error as Error).to.be.deep.equal({ message: 'Invalid mongo id' });
    }

    sinon.restore();
  });
  it('Retorna erro com ID inexistente', async function () {
    sinon.stub(Model, 'findOne').resolves(null);
    try {
      const service = new CarService();
      await service.getByValue('634852326b35b59438fbea2c');
    } catch (error) {
      expect(error as Error).to.be.deep.equal({ message: 'Car not found' });
    }

    sinon.restore();
  });
  it('Retorna lista de carros cadastrados', async function () {
    const carInputs = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    const cars = carInputs.map(
      (newcar) => new Car(newcar),
    );
    sinon.stub(Model, 'find').resolves(carInputs);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(cars);

    sinon.restore();
  });
});