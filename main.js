document.write("Array of object - map"+"<br>");
document.write("---------------------"+"<br>");

var tex=[
    {
        name:"tshirt",
        size:"s",
        price:250,
        color:"red",
        fabric:"cotton"
    },
    {
        name:"shirt",
        size:"s",
        price:300,
        color:"white",
        fabric:"cotton"
    },
    {
        name:"pants",
        size:"xl",
        price:500,
        color:"black",
        fabric:"cotton"
    },
    {
        name:"trowsers",
        size:"x",
        price:250,
        color:"brown",
        fabric:"cotton"
    },
    {
        name:"tshirt",
        size:"m",
        price:200,
        color:"red",
        fabric:"cotton"
    },
    {
        name:"shirt",
        size:"l",
        price:350,
        color:"red",
        fabric:"cotton"
    },
    {
        name:"shirt",
        size:"s",
        price:250,
        color:"green",
        fabric:"cotton"
    }
];

let x=tex.map(function(value,index,array){
    return value.price=200;
});
document.write(" update all cloths price :"+JSON.stringify(x)+"<br>");
document.write(JSON.stringify(tex)+"<br><br>");

let y=tex.map(function(value,index,array){
    return value.size="M";
});
document.write(" update all cloths size :"+JSON.stringify(y)+"<br>");
document.write(JSON.stringify(tex));