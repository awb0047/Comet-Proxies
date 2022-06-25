function genSID() {
    let digitCount = Math.floor(Math.random() * (8 - 4) + 4);
    num = Math.floor(Math.pow(10, digitCount-1) + Math.random() * 9 * Math.pow(10, digitCount-1))
    num.toString();
    return num;
}

function randomFour() {
    return Math.floor(Math.random() * (4 - 1 + 1) + 1)
}

function genPass() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

module.exports = { genSID, genPass, randomFour }

console.log(randomFour());