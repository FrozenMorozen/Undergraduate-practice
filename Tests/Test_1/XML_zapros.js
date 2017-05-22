var x = new XMLHttpRequest();
x.open("GET", "localhost:58444", true);
x.onload = function (){
    console.log(x.responseText);
}
x.send(null);