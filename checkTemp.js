function checkTemp(temp) {
    if (temp <=20) return -1;
    if (temp <= 40) return 0;
    return 1;
}

console.log(checkTemp(20))