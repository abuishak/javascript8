document.getElementById("convert-f-c").addEventListener("click", function () {

     var a = 0;
    a = parseInt("a, 0");
    var b =0;
    b= parseFloat("0");
    var degFahren = prompt("Please a value in Fahrenheit",0);
    var degCent;
    degCent = 5/9 * (degFahren - 32);
    alert(degFahren + "\xB0 F equals" + degCent +"\xB0 C");
    document.getElementById("holder1").innerHTML =(degFahren + "\xB0 F equals" + degCent +"\xB0 C" +"<br/>");
}); 
document.getElementById("convert-lbs-kilo").addEventListener("click", function () {
      var a = 0;
    a = parseInt("a, 0");
    var b =0;
    b= parseFloat("0");
    var pouKilogram = prompt("Please a value in Pounds",0);
    var degCent;
    degCent = 1/2.2046 * (pouKilogram - 0);
    alert(pouKilogram + "pounds equals" + degCent +"Kilograms");
    document.getElementById("holder2").innerHTML =(pouKilogram + "pounds equals" + degCent +"Kilograms"+"<br/>");
});
document.getElementById("convert-mph-kph").addEventListener("click", function () {
      var a = 0;
    a = parseInt("a, 0");
    var b =0;
    b= parseFloat("0");
    var houKilometers = prompt("Please a value a speed in miles per hour",0);
    var degCent;
    degCent = 1*1.609344 * (houKilometers - 0);
    alert(houKilometers + "miles per hour equals" + degCent +"kilometers per hour");
    document.getElementById("holder3").innerHTML =(houKilometers + "miles per hour equals" + degCent +"kilometers per hour"+"<br/>");
});
    