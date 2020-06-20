document.getElementById("Calculation").onclick = function() {
    var inputLeft = Number(document.getElementById("inputLeft").value);
    var inputRight = Number(document.getElementById("inputRight").value);
    document.getElementById("Total").innerHTML = inputLeft + inputRight;
};