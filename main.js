"use strict";
/* HOMEWORK ALERT
1) Make an array of objects. There should be atleast 6 objects
2) Give properties productName and productPrice
3) Do the filtration. Use javascript built in filter method on the array.
You need to filter the products where price is less than 1000.*/
Object.defineProperty(exports, "__esModule", { value: true });
const design = [{
        carName: "Toyota Camry",
        carData: {
            model: "LE",
            price: 27000, //(in $)
            color: "Black",
            isAC: () => true
        }
    },
    {
        carName: "Honda Accord",
        carData: {
            model: "Ex",
            price: 28500, //(in $)
            color: "Black",
            isAC: () => true
        }
    },
    {
        carName: "Tesla Model 3",
        carData: {
            model: "Standard Range Plus",
            price: 40000, //(in $)
            color: "Black",
            isAC: () => true
        }
    },
    {
        carName: "Ford F-150",
        carData: {
            model: "XL",
            price: 35000, //(in $)
            color: "White",
            isAC: () => true
        }
    },
    {
        carName: "BMW 3 Series",
        carData: {
            model: "330i",
            price: 43000, //(in $)
            color: "Red",
            isAC: () => true
        }
    },
    {
        carName: "Chevrolet Silverado",
        carData: {
            model: "1500 LT",
            price: 36000, //(in $)
            color: "Black",
            isAC: () => true
        }
    },
    {
        carName: "Honda CR-V",
        carData: {
            model: "EX",
            price: 30000, //(in $)
            color: "Red",
            isAC: () => true
        }
    },
    {
        carName: "Mercedes-Benz E-Class",
        carData: {
            model: "E 350",
            price: 57000, //(in $)
            color: "Black",
            isAC: () => true
        }
    },
    {
        carName: "Mazda CX-5",
        carData: {
            model: "Touring",
            price: 28000, //(in $)
            color: "Red",
            isAC: () => true
        }
    },
    {
        carName: "Subaru Outback",
        carData: {
            model: "Premium",
            price: 29000, //(in $)
            color: "White",
            isAC: () => true
        }
    }
];
let blackCar = design.filter((car) => {
    return car.carData.color === "Black";
});
console.log(blackCar);
