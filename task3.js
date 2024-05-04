function fromNumToNum(min, max) {
    res = []
    for (i = min; i <= max; i++) {
      let arr = []
      for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          arr.push(i)
        }
      }
      if (arr.length == 0) res.push(i)
    }
    return res
  }

console.log(fromNumToNum(11, 20))
console.log(fromNumToNum(1, 100))
