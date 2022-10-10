const repeatString = function(string, num) {
    if ( num < 0 ) {
        return `ERROR`;
    } else {
    let a = ``;
    for ( let i = 1 ; i <= num ; i++ ) {;
        a += string;
    }
    return a;
    }
};

// Do not edit below this line
module.exports = repeatString;
