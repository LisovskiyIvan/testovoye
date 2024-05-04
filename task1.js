function setRightCase(num) {
    let arr = num.toString().split('').map(num => parseInt(num))
    if (arr[arr.length - 1] === 1) return `${num} компьютер`
    else if (num > 1 && num < 5) return `${num} компьютера`
    else return `${num} компьютеров`
  }

  console.log(setRightCase(1))
  console.log(setRightCase(25))
  console.log(setRightCase(41))
  console.log(setRightCase(1048))
  console.log(setRightCase(500))