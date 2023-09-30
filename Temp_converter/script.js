let body=document.querySelector("body");
let fahrenheit =document.getElementById("fahrenheit");
let celsiusconvertor=document.getElementById("celsiusconvertor");





function converttoCelsius(){
    let value=fahrenheit.value;
        
    celsiusconvertor.textContent=(value-32)*(5/9);

}