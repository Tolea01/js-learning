function getPrimes(n) {
    const primes = [];

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(getPrimes(10));