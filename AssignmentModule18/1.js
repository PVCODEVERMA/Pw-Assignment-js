const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};

function displayCarProerties(carObj){
    console.log(`Make: ${carObj.make}`);
    console.log(`Model: ${carObj.model}`);
    console.log(`year: ${carObj.year}`);
}

displayCarProerties(car);