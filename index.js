function receivesAFunction (cb) {
    return cb();
        

};

function returnsANamedFunction() {
    return function Named(){
        1 + 2};
}

function returnsAnAnonymousFunction() {
    return function () {
        1 +2;
    }
}