alert("Hello, World!");
var a = prompt("Enter a value:", "");
var isTrue = confirm("are you sure you want to leave this page and blast your computer ")
if(isTrue) {
    console.log("computer blasted");
}
else {
    console.log("computer safe");
}       
console.log("You entered: " + a);