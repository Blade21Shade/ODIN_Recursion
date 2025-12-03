function fibonacci(sequencePosition) {
    if (sequencePosition < 0) {
        console.log("Position cannot be below 0")
    }

    let value = innerFib(sequencePosition);
    console.log(`Value at ${sequencePosition}: ${value}`);
}

function innerFib(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    return innerFib(n-1) + innerFib(n-2);
}

fibonacci(5);
fibonacci(8);
fibonacci(11);
fibonacci(14);
fibonacci(17);