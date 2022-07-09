const key ="email";
const personObj ={
     name:'sonu',
     age:18,
     "person hobbies":['guitar','singing','music']
}
// console.log(personObj);
// // dot cant be used
// console.log(personObj["person hobbies"]);
// personObj.key='test@gmail.com';
personObj[key] ='test@gmail.com';
console.log(personObj);