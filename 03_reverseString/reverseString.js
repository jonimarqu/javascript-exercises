const reverseString = function(string) {
    const myArray = Array.from(string);
    let reversed = ``;
    for ( let i = 0 ; i <= string.length -1 ; i++ ) {
        reversed += myArray.pop();
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
