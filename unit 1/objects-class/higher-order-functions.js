//function statement means we are writing/defining/declaring a function
function javascript(){
    console.log("welcome to js");
}
javascript();

//function expression or anonymous function
var b = function(){
    console.log("another function assigned to a variable")
};
//to invoke such function
b();
// parameter won't change so batch is a parameter whereas 07 is arguement
function ptweb(batch){
    console.log("welcome ptweb" + batch);
}
ptweb(07);
// different type of arguments- number string array functions
// when we send function as arguement then its called "call back"


//item and call back are arguement and inside callback there is a function called do brush so it becomes a call back fn
function eatbreakfast(item, callbackfn){
 callbackfn();
    console.log("eat",item,"for breakfast");

}
// call back function
function dobrush(){
    console.log("brush your teeth");
}
eatbreakfast("paratha", dobrush);

//order of execution -> 30 then 21nline-> 22 line-> 27 line -> 23rd line
var sweets =["gulabjamun", "katli", "rasmalai", "laddu"];
// for each to display all item of array always use element and then index even if you want to diplay only index
// here foreach is invoked directly because its an inbuilt function and it is only applicable for array
var box= [];
sweets.forEach(function(element,index,array)
{
    //return element not possible because forEach does not return any value
    box.push(element ,index, array );
});

console.log(box);
//map return value no extra variable needed
var box= sweet.map(function(element,index)
{
    return{element};
});
console.log(box);

//filter it will print element that we need only 
var a =[1,2,3,4,5,6,7,8,8,9];
var res = arr.filter(function(el,index){
return el%2===0;
});
//if true only then it will return if we use map it will print boolean for 8 values i.e. true false and to print these value we can use if condition inside map

//reduce to get single value
var num = [1,2,3,4,4,5,6];
//1) without initial value then 1st value of accumulator is a[0] and element is arr[1]
num.reduce(function(acc,element){
})
//2) with initial value
num.reduce(function(acc,element){
},0);
// initial value of acc like 0,2or some other value
//chaining
map( "product in flipkart").filter("below 500").reduce(cart value);
/*forEach.filter not possible
reduce.filter is not possible
filter.reduce such chains are ok */
//hop       input       output
//forEach   array      undefined because no return
//map         array      array whether boolean only
//filter      array     filtered array
//reduce      array      single value satisfaction happiness