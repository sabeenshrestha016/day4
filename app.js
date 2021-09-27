
var obj = {
  name : "sabin",
  email :"sabin@gmail.com",
  age :21
}
 var mydata =  {
   name : "rabin",
   email :"rabin@gmail.com",
   age : 20
 }
mydata.name = "nabin"
obj = mydata
mydata.stats = "taken"

console.log(obj);
mydata.name = "prabin";
console.log(mydata)
console.log(obj.name )




