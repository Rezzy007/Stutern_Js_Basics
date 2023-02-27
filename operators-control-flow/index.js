// Question 3

let scienceStudent = ['Physics', ' Chemistry', ' Biology', ' Technical drawing,'];
let social_Science_Student = ['Accounting', ' Commerce', ' Marketing', ' Geography,'];
let artsStudent = ['Government', ' Literature', ' Economics', ' History,'];
let generalSubjects = ['English', ' Mathematics'];

student = (subjects) => {
    if (subjects == scienceStudent) {
        console.log(`${scienceStudent} ${generalSubjects}`);
    }
    else if (subjects == social_Science_Student) {
        console.log(`${social_Science_Student} ${generalSubjects}`);
    }
    else if (subjects == artsStudent) {
        console.log(`${artsStudent} ${generalSubjects}`);
    }
    else {
        console.log(`${generalSubjects}`);
    }
};

console.log(student(artsStudent));


//Question 4

for (let i = 1; i < 20; i += 7) {
    console.log(i);
};
// When this program is executed, the result is 1, 8 and 15.