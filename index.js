function summary (arr) {
  var N = arr.length
  function median (arr) {
    if (N % 2 === 0){
      var med = 1/2 * (arr[N/2] + arr[N/2+1])
    }
    if (N % 2 === 1){
      var med = arr[(N + 1)/2]
    }
    return med
  }

  function sum (arr) {
    result = 0
    for (var i = 0; i < N; i++){
      result += arr[i]
    }
    return result
  }

  function quartiles (opt, arr) {
    var index = 0
    if (opt === 'first') {
      index = N * 0.25
    }
    if (opt === 'third') {
      index =  N * 0.75
    }
     if (index % 1 !== 0) {
     return (arr[index - 0.5] + arr[index + 0.5]) / 2
     }
     else {
       return arr[index]
     }
  }
  arr.sort(function (a,b){
    return a - b
  })

  return {
    'Min': Math.min(...arr),
    '1st Quartile': quartiles('first', arr),
    'Median': median(arr),
    '3rd Quartile': quartiles('third', arr),
    'Max': Math.max(...arr),
    'Sum': sum(arr)
  }
}
module.exports = summary
