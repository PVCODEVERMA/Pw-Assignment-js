function hasProperty(obj, propertyName) {
    if (typeof obj !== 'object' || obj === null) {
        console.log('Invalid input');
        return false;
    }

    if (propertyName in obj) {
        console.log(`The object has the property "${propertyName}".`);
        return true;
    } else {
        console.log(`The object does not have the property "${propertyName}".`);
        return false;
    }
}


const myObject = {
    name: 'pankaj',
    age: 22,
    city: 'Lucknow'
};

hasProperty(myObject, 'age'); 
hasProperty(myObject, 'gender'); 
