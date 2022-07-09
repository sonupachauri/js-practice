const personObj ={
    name:"sonu",
    age:18,
    "person hobbies":["guitar","singing","music"]
}

// for(let key in personObj){
//     // console.log(personObj[key]);
//     // console.log(`${key}:${personObj[key]}`);
//     console.log(key,":",personObj[key]);
// }

// console.log(Object.keys(personObj));

for(let key of Object.keys(personObj)){
   console.log(personObj[key]);
}