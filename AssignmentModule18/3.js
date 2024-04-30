function countProperties(obj){
    if(typeof obj !== 'Object' || obj === null){
        return 0;
    }
    return Object.keys(obj).length;
}

const myObject = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
}

const propertyCount = countProperties(myObject);

console.log(`Number of properties in the object:${propertyCount}`);