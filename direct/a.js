const amqplib = require('amqplib');
 
const exchangeName = "logs";
const args = process.argv.slice(2);
const msg = args[1] || "Hii";
const logTypes = args[0]
console.log(args);