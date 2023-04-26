const car = {
    manufacturer: 'Volkswagen',
    model: 'Jetta',
    year: 2008,
    avgSpeed: 70,
    tankCapacity: 52,
    avgFuelConsumption: 7.5,
    drivers: ['Sergei'],

    showInfo() {
      const { manufacturer, model, year, avgSpeed, tankCapacity, avgFuelConsumption, drivers } = this;
      console.log(`Manufacturer: ${manufacturer}`);
      console.log(`Model: ${model}`);
      console.log(`Year of Manufacture: ${year}`);
      console.log(`Average Speed: ${avgSpeed} km/h`);
      console.log(`Fuel Tank Capacity: ${tankCapacity} liters`);
      console.log(`Average Fuel Consumption: ${avgFuelConsumption} liters/100 km`);
      console.log(`Drivers: ${drivers.join(', ')}`);
    },

    addDriver(driverName) {
      this.drivers.push(driverName);
      console.log(`${driverName} have been added to the driver list.`);
    },

    isDriver(driverName) {
      return this.drivers.includes(driverName);
    },

    calculateTravelTimeAndFuel(distance) {
      const { avgSpeed, avgFuelConsumption } = this;
      const drivingTime = distance / avgSpeed;
      const restTime = Math.floor(drivingTime / 4);
      const totalTravelTime = Math.floor(drivingTime + restTime);
      const fuelNeeded = (distance / 100) * avgFuelConsumption;
      console.log(`To cover ${distance} km, the car will need ${fuelNeeded} liters of fuel and the journey will take ${totalTravelTime} hours including rest stops.`);
    }
  };

  car.showInfo(); // displays information about the car
  car.addDriver('Olga, Sasha'); // adds a driver
  console.log(car.isDriver('Sergei')); // checks if a driver is in the list
  car.calculateTravelTimeAndFuel(500); // calculates time and fuel needed for a distance of 500 km