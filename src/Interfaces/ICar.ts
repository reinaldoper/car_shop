import IVehicle from './IVehicle';

interface ICar extends IVehicle {
  doorsQty: number,
  seatsQty: number,
}

export default ICar;

/* {
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
} */