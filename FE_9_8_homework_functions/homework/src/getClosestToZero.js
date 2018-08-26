function getClosestToZero(){
    let num = arguments[0];
    let absNum = Math.abs(num);
    for(let i = 1; i < arguments.length; ++i) {
        let newAbs = Math.abs(arguments[i]);
        if(newAbs < absNum) {
            absNum = newAbs;
            num = arguments[i];
        }
    }
    return num;
}

