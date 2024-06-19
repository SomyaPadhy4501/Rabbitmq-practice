const amqplib = require('amqplib');
 
const args = process.argv.slice(2);
 
if(args.length == 0){
    console.log("Usage: rpc_client.js num");
    process.exit(1);
}

const num = parseInt(args[0]);

const getFib = async() => {
    const connection = await amqplib.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const q = await channel.assertQueue('' , {exclusive:true});

    console.log('requesting Fib' , num);
    


}