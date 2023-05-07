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
var rectangle={
    perimeter: function(length,breadth)
    {
        return (2*length+ 2*breadth);
    },
    area: function(length,breadth)
    {
        return (length*breadth);
    }

};
console.log(rectangle.perimeter(2,4));
var products=["mac", "phone", "ipad"];
var price= [389808, 879,83479];
var data=[];
//{product:,price:}