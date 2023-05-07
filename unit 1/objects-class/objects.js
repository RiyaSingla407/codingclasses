var str= "masai";

//{m:1,a:2,s:1,i:1}
//initialise an object
var diary= {};

for(var i=0; i<str.length; i++)
{
    var char = str[i]; 
    if(diary[char] == undefined){
        diary[char] = 1;
    }
    else{
        diary[char] = diary[char] + 1;
        //diary[char]=diary[char]+1;
        // using bracket notation
    }
}
console.log(diary);
var student= {
    name:"cherry",
    age:22,
    gender:"male",
    city:"bangalore", 
    drivinglicense: false,
    address:{
        //nested object
        street:{
            flatNo: "nhjgjgj",
            buildingname: "hjgjhgj",

        },
       pincode: 3435335,
       apartment:"jhk",
    },
};
//special loop for object is for-in loop
/*for(var key in objname)
{
    console.log(key, objname.key);
    if (key==address){
        for (const key in object) {
            
        }
    }
}*/
// to store data of 65 students we can create an array of objects where objects are students
//var classroom = [student1,student2,student3];
//student1={};
//student2={};
//student3={};
var classroom = [
    {name: "riya", age: 22,},
    {name: "priya", age: 72,},
    {name: "shriya", age: 32,},
];
for(var i =0; i<classroom.length; i++){
    console.log(classroom[i].name);
}
var amazon = [{name:"mobile",price:5500, rating:5},
{name:"small-mobile",price:9500, rating:4},
{name:"second-hand-mobile",price:3500, rating:2},
];
for(var a=0; a<amazon.length; a++)
{
    console.log(amazon[a].name,amazon[a].rating);
}
// if value of a key is function it becomes method 
var student={
    name:"roy",
    age:22,
    print : function(){
        console.log("hello dude");
    },  
};
// invoke a function to call it funname();
// if  Function does not have any name its called anonymous function and inside an object its always an anonymous function because we can access it using key name and we dont't need function name
console.log(student.print());
student.print();
// because console already given in print function so don't need to write console.log again . we can write return there and then if we use console.log then it will be okay otherwise undefined
// inbuilt-functions/methods=> splice , split , join ,push, pop
//if present inside a object it becomes object method now print is no longer a key instead it has become a method now

// address is nested object 
// key = name age gender city
// in our case objname is student