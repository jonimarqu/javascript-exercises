const sumAll = function(a, b) {
    if ( a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) ) return `ERROR`;
    if ( a < b ) {
        let sum = a;
        while ( a < b ) {
            sum += a + 1;
            a++;
        }
        return sum;
    } else {
        let sum = b;
        while ( b < a ) {
            sum += b + 1;
            b++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;