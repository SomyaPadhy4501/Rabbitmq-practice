const amqplib = require('amqplib')
const queueName = 'hellow';

const recieveMsg = async () => {
    const connection = await amqplib.connect('amqp://localhost')
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName , {durable:false});
    console.log('waiting for msg in queue :',queueName);
    channel.consume(queueName , msg => {
        console.log("msg recieved" , msg.content.toString());
    } , {noAck: true})
}

recieveMsg();