//instead var(scope->cant use outside function othwewise globally) use let 
//let -> block scopt -> curly bracket scope
//let will show error if u redeclare an element
//const (readable)(not uupdateable,not editable.not changeable)
//use tempelate literal->backtick instead +

//spread operator
// var a =["dhara","rajput"];
// var b =[...a,"kumari"]
// console.log(b);

//destructuring
// var stu ={ 
//     name = "dhara",
//     school: "saylani",
//     roll:123 
// }
// let {name,school,roll} = stu;
// console.log(name);

//Ternary operators instead if else
// var age = 20;
// var check =
// age > 30 ?
// "bgger then 30"
// :
// "shorter then 30"
// console.log(check);

// var age = 20;
// var check =
// age > 30 || age<50 ?
// "bgger then 30"
// :
// age > 70 || age<90 ?
// "bgger then 70"
// :
// "shorter then 30"
// console.log(check);

// var bool="true";
// var name = bool && "Ghous";
// console.log(name);    

//synchronus and assynchronus
//assynchronus
// setTimeout(() => {
//     console.log('num 1');
// }, 1000);
// console.log('num 2');
// console.log('num 3');
//synchronus
//  var n1;
//  setTimeout(() => {
//     n1="Dhara Rajput" 
//  }, 4000);
//  setInterval(() => {
//     console.log(n1);
//  }, 1000);

//promise
// var promise = new Promise(function(resolve,reject){
//     var zinger = "abcd";
//     if(zinger === "avail"){
//         resolve("khiladeya")
//     }else{
//         reject("nahi khilaaya")
//     }
// });
// promise.then(function (data) {
//     console.log("resolve "+data);

// })
// .catch(function (error) {
//     console.log("error "+error);
// })

//promise-pending
// var promise = new Promise(function(resolve,reject){
//      if(true){
//          setTimeout(() => {
//             resolve("resolve")

//          }, 3000);
//     }else{
//         reject("nahi khilaaya")
//     }
// });
// console.log(promise)
// promise.then(function (data) {
//     console.log("resolve "+data);

// })
// .catch(function (error) {
//     console.log("error "+error);
// })

//PROMISE with firebase
// var promise = new Promise(function(resolve,reject){
// firebase.database.ref("users").on("child_added",function (data) {
//     if(data.val()){
//                 resolve(data.val())
//             }else{
//                 reject("error")
//             }
//     })
// });

// promise.then(function (data) {
//     console.log("resolve "+data);
// })
// .catch(function (error) {
//     console.log("error "+error);
// })

//object destructure
// let obj ={
//     named:"dhara",
//     email:"dhara@gmail.com"
// }
// let{named,email} = obj;
// console.log(named);
//array destructure
// let arr =["dhara","kumari","rajut"]
// let[n1,n2,n3]=arr;
// console.log(n3);

//function expression
// let foo =function () {
//     console.log('hello')
// }
// foo();

//arrow functions with template literals
// let hello = (n1,n2)=>{
//     console.log("Arrow"+` hello ${n1} and ${n2}`)
// }
// hello("dhara","hello");
//first method of return
// let hello= ()=>{
//     return "dhara";
// }
// console.log(hello());
//second method of return
// let hello= ()=>"dhara";
// console.log(hello());
// let hello = ()=>{
//     console.log(this)
// }
// hello();

//call back function
// setInterval(()=>console.log("hello",1000));
// let getData= (render_data)=>{
//     firebase.database().ref('/').on("child_added",(data)=>{       
//         render_data(data.val())
//     })
// }
// getData(render_data)
// let render_data =(data)=>{
//     console.log(data);
// }

//calback and higher order function
// let getData= (render_data)=>{
//    setTimeout(() => {
//     render_data("dhara")
//    }, 3000);     
//  }
//    let render_data =(name)=>{
//     console.log(name);
// }
// getData(render_data)

// let arr=[{name:"dhara",age:20},{name:"ayesha",age:23}]
// let filter = arr.filter((a)=>a.age===20);
// console.log(filter)

// let arr=[{name:"dhara",age:20},{name:"ayesha",age:23}]
// let filter = arr.filter((a)=>false);
// console.log(filter)

// let arr=[{name:"dhara",age:20},{name:"ayesha",age:23}]
// let filter = arr.filter((a)=> a.age>22);
// console.log(filter)

// let arr=[{name:"dhara",age:20},{name:"ayesha",age:23}]
// let filter = arr.filter(function(a){
// //   return a;
// //   return true;
//     return a.age === 23;
// });
// console.log(filter);

//search
// let name ="dhara";
// let search="dh";
// if(name.startsWith(search)){
//     console.log(name);
// }

// let name ="dhara";
// let search="ra";
// if(name.endsWith(search)){
//     console.log(name);
// }

//map
// let arr=[2,3,4,5];
// console.log(arr);
// let mul = arr.map(a =>a*2)
// console.log(mul);

// let arr=[{name:"dhara"},{name:"rajput"}];
// console.log(arr);
// let update= arr.map(a =>a.name = "hello")
// console.log(update);

// let arr = [{ name: "dhara" }, { name: "rajput" }];
// console.log(arr);
// let update = arr.map(a => {
//     document.getElementById('table').innerHTML = a.name

// })
// console.log(update);

// function Student (name,email){
//     this.name =name;
//     this.email=email;
// }
// let student1 = new Student("dhara","dhara@gmail.com")
// console.log(student1);

//class usage
// class Student{
//     constructor (name,email){
//     this.name =name;
//     this.email=email;
// }}
// let student1 = new Student("dhara","dhara@gmail.com")
// console.log(student1);


// class Student{
//     constructor (name,email){
//     this.name =name;
//     this.email=email;
// }}
// class School extends Student{
//     constructor (name,email,school){
//     super(name,email);
//     this.school=school;
// }}
// let student1 = new Student("dhara","dhara@gmail.com")
// let school1 = new School("dhara","dhara@gmail.com","iqra")
// console.log(student1);
// console.log(school1);

//add to cart
// function add_to_cart(){
//     var img = document.getElementById('image');
//     var price=document.getElementById('price');
    

// var product={
//     image,price
// }
// var arr=[];
// arr.push(product)
// localStorage.setItem("cart",arr)}