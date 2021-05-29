let test = [];
let it = function(description, func) {
    test.push([description, func]);
}

for(var i = 0; i < 10; i++) {
    it('should do something - ' + i, function() {
        console.log(i)
    })
}


for(var i = 0; i < 10; i++) {
    (function(number) {
        it('should do something - ' + number, function() {
            console.log(number)
        })
    })(i)
}


test.forEach((pair) => {
    console.log(pair[0]);
    pair[1].apply();
})