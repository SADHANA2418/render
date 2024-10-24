// function smod(name){
//     console.log(`Welcome ${name}`);
// }
// module.exports=smod;
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mydate(){
    return Date();
}
module.exports={
    add,
    sub,
    mydate
};
//these functions can also be made into a class and then import it:
//module.exports=new class();