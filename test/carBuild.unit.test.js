import carBuild from "../src/carBuild";

describe("Test suite for build function carBuild 🚗", () => {
  test("Should create a new object car based in carBuild Function", () => {
    const expectedValue = {
      brand: "Tesla",
      model: "Model 3",
      year: 2020,
    };

    const newCar = new carBuild("Tesla", "Model 3", 2020);

    expect(typeof newCar).toBe('object');
    expect(newCar).toEqual(expectedValue);
  });

  test("Should create a new object some cars based in carBuild Function", () => {
    const carMocks = [
      {
        brand: "Tesla",
        model: "Model 3",
        year: 2020,
      },
      {
        brand: "Tesla",
        model: "Model X",
        year: 2018,
      },
      {
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
      },
    ];
    const cars = [];

    for (let item of carMocks) {
      cars.push(new carBuild(item.brand, item.model, item.year));
    }

    const newCar = new carBuild("Tesla", "Model 3", 2020);

    expect(typeof cars).toBe('object');
    expect(cars.length).toBe(3);
    expect(cars).toEqual(carMocks);
  });
});
