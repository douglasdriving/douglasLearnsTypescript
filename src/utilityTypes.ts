interface Car0 {
  make: string;
  model: string;
  year: number;
}

//partial - only some of the properties are required
const carUpdate: Partial<Car0> = {
  year: 2019
};

//pick - only some of the properties are required, but we decide which ones
const carPick: Pick<Car0, "make" | "model"> = {
  make: "Toyota",
  model: "Camry"
};

//readonly - properties cannot be changed
const carReadonly: Readonly<Car0> = {
  make: "Toyota",
  model: "Camry",
  year: 2019
};

//exlcude - exclude properties from a type
type AllTypes = string | number | boolean | undefined | null | object | symbol | bigint;
type AllButUndefined = Exclude<AllTypes, undefined>;
