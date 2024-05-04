function allCommonDivisors(arr) {
    const allDivisors = [];
    const divisors = []
    const res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j <= arr[i]; j++) {
            if (arr[i] % j === 0) {
                allDivisors.push(j);
            }
        }

    }
    allDivisors.forEach(item => {
        divisors[item] = (divisors[item] || 0) + 1;
    });

    const unique = allDivisors.filter(item => divisors[item] > 1)

    for (let i = 0; i < unique.length; i++) {
        if (!res.includes(unique[i])) {
            res.push(unique[i]);
        }
    }
    res.sort()
    return res.length == 0 ? 'нет общих делителей' : res
}

console.log(allCommonDivisors([42, 12, 18]))
console.log(allCommonDivisors([7, 11]))
console.log(allCommonDivisors([6, 12, 16]))
