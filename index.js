function fizzbuzz(num) {

    var returnValue = "";
    for (let i = 1; i < num; i++) {

        if (i % 3 === 0) {
            returnValue += "FIZZ";


        } else if (i % 5 === 0) {
            returnValue += "BUZZ";
        } else if (i % 3 === 0 && i % 5 === 0) {
            returnValue += "FIZZBUZZ";

        } else {
            returnValue += i;
        }

    }
    return returnValue;
}

function fizz() {
    var num = document.getElementById('number').value;
    //var results=document.getElementById('result');
    var output = "";
    output = fizzbuzz(num);
    document.getElementById('result').innerHTML = output;
}