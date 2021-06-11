const log = function(a, b, ...numbers) { //rest
    console.log(a, b, ...numbers); // spread 
};

log(1, 5, 16, 75, 86, 23);

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3, 5);