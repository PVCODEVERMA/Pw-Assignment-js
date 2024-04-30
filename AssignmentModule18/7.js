
const userMap = new Map();


function addUser(name, age, email) {
    userMap.set(email, { name, age });
    console.log(`User "${name}" added successfully.`);
}


function updateUserAge(email, newAge) {
    if (userMap.has(email)) {
        const user = userMap.get(email);
        user.age = newAge;
        console.log(`Updated age for user "${user.name}" to ${newAge}.`);
    } else {
        console.log(`User with email "${email}" not found.`);
    }
}


function deleteUser(email) {
    if (userMap.has(email)) {
        const user = userMap.get(email);
        userMap.delete(email);
        console.log(`User "${user.name}" deleted successfully.`);
    } else {
        console.log(`User with email "${email}" not found.`);
    }
}


addUser("Alice", 25, "alice@example.com");
addUser("Bob", 30, "bob@example.com");

updateUserAge("alice@example.com", 26);
deleteUser("bob@example.com");
