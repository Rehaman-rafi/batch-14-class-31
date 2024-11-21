function sum() {
    event.preventDefault();
    let x = document.getElementById("product1").value;
    let y = document.getElementById("product2").value;
    let z = document.getElementById("product3").value;

    let result = parseFloat(x)+parseFloat(y)+parseFloat(z);
    document.getElementById("result").innerHTML="the total price is="+result;
}