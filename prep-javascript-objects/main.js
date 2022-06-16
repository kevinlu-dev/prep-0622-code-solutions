var person = {
  firstName: 'Kevin',
  lastName: 'Lu',
  hobby: 'Digital Portrait Illustration'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is:", fullName + ' ');

person.job = 'Student';
console.log("The person's current job is:", person.job);

person.previousJob = 'Designer';
console.log("The person's previous job was:", person.previousJob);

console.log('The complete person object:', person);
