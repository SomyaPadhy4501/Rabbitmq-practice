const amqplib = require('amqplib');
 
 const exchangeName = "logs";

 const receieveMsg = async () => {
    const connection = await amqplib.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertExchange(exchangeName , 'fanout' , {durable:false});
    const q = await channel.assertQueue('' , {exclusive:true});
    console.log("waiting for messages in queue" , q.queue);
    channel.bindQueue(q.queue , exchangeName , '');

    channel.consume(q.queue , msg => {
        if(msg.content) console.log("The message is" , msg.content.toString());

    } , {noAck: true})
 }

 receieveMsg();
