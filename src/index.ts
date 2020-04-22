import Server from './classes/server';

//java tutorial
//https://code.visualstudio.com/docs/java/java-tutorial

const server =  new Server();
server.start((port:number)=>{
  console.log('listen in port ' + port);
})
