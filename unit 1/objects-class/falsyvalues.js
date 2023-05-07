var a=5;
var b=5;
console.log(a+b);
var details= ["cherry", 22, "male", "bangalore", false]
console.log(details[0]);
/*two methods of getting value form objects
1 bracket notation)
syntax objname["keyname"]
2 dot notation)
syntax objname.keyname
 */
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
            buildingname:hjgjhgj,

        },
       pincode: 3435335,
       apartment: jhk,
    },
};
student.address.pincode=56576;
student["address"]["apartment"]=false;
student["age"]=19;
//use pop method to delete from array
//adding more keys
delete student.gender;
student.drivinglicense=true; 
//delete method to delete value from objects
student.hobbies=['gardening', "singing"]
//giving array as value inside a key
console.log(student["name"]);
console.log(student.city);
student["married"]=true;
console.log(student);
/*key should be unique and meaningful
mostly keys remains same values keeps on changing */
/*undefined means when we don't assign any value to a variable and try printing then it will print undefined
and this undefined is given by javascript itself
Null does not mean empty it means it has no value not even 0, no apple from mango tree means null
0 is also a falsy value
undefined==null returns true because both are false value , false=false return true
undefined===null returns false because nature not same
because == checks value === checks value and data type type of undefined is undefined but type of null is object because we can assign it to a variable but undefined is default


*/