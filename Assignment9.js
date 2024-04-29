
const mixedArray = [10, "hello" , 6, "world", 2.10, " pankaj"];

for (const element of mixedArray) {
    if(typeof element === "string"){
        console.log("Found the fast string:", element);
        break;
    }
}