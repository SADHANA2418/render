//1.importing the http library
const http1=require('http');//in-built module
const s=require('./smodule1');//local module
//2.creating the web server
const webserver=http1.createServer((req,res)=>{
   const sum=s.add(1,2);  
   const diff=s.sub(10,2);
   res.write(`the sum is: ${sum} and the difference is: ${diff}`);
   res.write("the date is:"+s.mydate());
    res.end("hello server");//response to the client
});
//3. adding the port number
const port=3500;
//4.listening the server
webserver.listen(port,()=>{
     console.log("listening..... http://localhost:3500");
});