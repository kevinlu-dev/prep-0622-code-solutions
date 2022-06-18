function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var numSum = addTwoNumbers(2, 2);
console.log('addTwoNumbers result:', numSum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hoursToMin = convertHoursToMinutes(2);
console.log('hoursToMin result:', hoursToMin);

function getGreeting(name) {
  return name + ' ' + 'World!';
}
var greeting = getGreeting('Hello');
console.log('greeting result:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addMultiply5 = addAndMultiplyBy5(10, 5);
console.log('addMultiply5 result:', addMultiply5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyDivide5 = multiplyAndDivideBy5(35, 10);
console.log('multiplyDivide5 result:', multiplyDivide5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNum = subtractTwoNumbers(22, 7);
console.log('subtractTwoNum results:', subtractTwoNum);

function getCircleCircumference(radius) {
  return radius * Math.PI * 2;
}
var circleCircum = getCircleCircumference(5);
console.log('circleCircum result:', circleCircum);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName result:', fullName);

function cube(number) {
  return number * number * number;
}
var cubed = cube(5);
console.log('cubed result:', cubed);
