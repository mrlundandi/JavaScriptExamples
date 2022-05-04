buclePrimos:
for (let n = 0; n < 11 ; n++){
    if (n <= 1){
        console.log(n);
        continue buclePrimos;
    }
    for (let i = 2 ; i < n ; i++){
        if (n % i == 0) {
        console.log(n);
        continue buclePrimos;
        }
    }
    console.log("Número primo");
}