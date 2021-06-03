const message = name => {
    console.log(`Hello ${name}`);
}

message('Wahidin');

console.log(Object.getOwnPropertyNames(global));
const cpuInformation = process.memoryUsage().heapUsed;
console.log(cpuInformation);

 const firstName = process.argv[2];
 const lastName = process.argv[3];
console.log(`Hello ${firstName} ${lastName}`);

// const moment = require('moment');
// const date = moment().format("MMM Do YY");
// console.log(date);