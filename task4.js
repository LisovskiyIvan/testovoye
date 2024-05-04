function multiplicationTable(num) {
    let arr = '   ' + [...Array(num).keys()].map(i => (i + 1).toString().padStart(4)).join('') + '\n'
  
    for (i = 1; i <= num; i++) {
      arr += `${i.toString().padStart(3)} `
      for (j = 1; j <= num; j++) {
        x = i * j
        arr += `${x.toString().padStart(3)} `
      }
      arr += '\n'
    }
    console.log(arr)
  }

multiplicationTable(5)
// multiplicationTable(4)
// multiplicationTable(10)