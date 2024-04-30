function calculateCircleArea(radius) {
    if(radius <= 0){
        console.log("Invalid radius.");
        return;
    }
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area of a circle with radius${radius} unit is approximately ${area.toFixed(2)} square units.`)
}

const circleRedius = 5;
calculateCircleArea(circleRedius);