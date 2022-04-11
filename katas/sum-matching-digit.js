function sumMatchingDigit(num){
    const singleNum = num.toString().split('');

    if (singleNum.length <= 1){
        return 0
    } else {

    const realNum = singleNum.map(number => Number(number))
  
    let sum = 0;
  
    for (let i = 0; i <realNum.length; i++){
      if(realNum[i] === realNum[i - 1]){
        sum += realNum[i]
      }
    }
    if(realNum[0] === realNum[realNum.length - 1]){
      sum +=realNum[0]
    }
    return sum
  }
}

module.exports = sumMatchingDigit;