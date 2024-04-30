const student = {
    name: "pankaj",
    age: 18,
    grade: 10,

    updateGrade(newGrade){
        if(newGrade >=1 && newGrade <= 12){
            this.grade = newGrade;
            console.log(`Update hrade for ${this.name} to ${newGrade}`);
        } else {
            console.log("Invalid grade. Please provide a grade between 1 and 12.")
        }
    }
    
};

console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Grade: ${student.grade}`);

student.updateGrade(11);
student.updateGrade(13);