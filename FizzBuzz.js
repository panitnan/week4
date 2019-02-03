function fizzbuzz(num) {
    if(num % 5 == 0 && num % 3 == 0) {
        return "fizzbuzz"
    } else if (num % 3 == 0){
        return "fizz"
    } else if (num % 5 == 0) {
        return "buzz"
    } else if (num.toString().includes("3") && num.toString().includes("5")) {
        return "fizzbuzz"
    } else if (num.toString().includes("3")) {
        return "fizz"
    } else if (num.toString().includes("5")) {
        return "buzz"
    }  else {
        return num
    }
}