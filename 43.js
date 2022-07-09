// nested destrucring
const users = [
    {userId:1,firsName:"sonu",gender:"male"},
    {userId:2,firsName:"manoj",gender:"male"},
    {userId:3,firsName:"jyoti",gender:"female"}
]

// const [user1,user2,user3] = users;

const [{firsName:user1fname},,{gender}] = users;
console.log(user1fname);