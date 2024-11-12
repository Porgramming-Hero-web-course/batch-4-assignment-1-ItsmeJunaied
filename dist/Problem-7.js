"use strict";
{
    // =======================================================================================================================
    // Problem 7:
    // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
    // =========================================================================================================================
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            return `this car age is ${this.year}`;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
}
