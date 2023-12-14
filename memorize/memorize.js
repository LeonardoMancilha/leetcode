function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args); // Gerar uma chave única baseada nos argumentos

        if (key in cache) {
            console.log('Retornando do cache para', key);
            return cache[key];
        } else {
            console.log('Calculando para', key);
            const result = fn(...args); // Chamar a função fn com os argumentos

            cache[key] = result;
            return result;
        }     
    };
}

function sum(a, b) {
  return a + b;
}

function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
  if (n <= 1) return 1;
  return factorial(n - 1) * n;
}

const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

console.log(memoizedSum(2, 3)); // Calculando para [2,3]. Saída: 5
console.log(memoizedSum(2, 3)); // Retornando do cache para [2,3]. Saída: 5 (resultado obtido do cache)

console.log(memoizedFib(5)); // Calculando para [5]. Saída: 8
console.log(memoizedFib(5)); // Retornando do cache para [5]. Saída: 8 (resultado obtido do cache)

console.log(memoizedFactorial(4)); // Calculando para [4]. Saída: 24
console.log(memoizedFactorial(4)); // Retornando do cache para [4]. Saída: 24 (resultado obtido do cache)