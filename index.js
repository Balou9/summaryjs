function summary (arr) {
  var N = arr.length
  function quartiles (arr, opt) {
    var index = N * opt
    if (index % 1 !== 0) {
      return (arr[index - 0.5] + arr[index + 0.5]) / 2
    }
    else {
      return arr[index]
    }
  }
  function median (arr) {
    if (N % 2 === 0){
      var med = 1/2 * (arr[N / 2] + arr[N / 2 + 1])
    }
    if (N % 2 === 1){
      var med = arr[(N + 1)/2]
    }
    return med
  }
  function sum (arr) {
    result = 0
    for (var i = 0; i < N; i++) {
      result += arr[i]
    }
    return result
  }
  arr.sort( function (a,b) {
    return a - b
  })
  return {
    'Min': Math.min(...arr),
    '1st Quartile': quartiles(arr, 0.25),
    'Median': median(arr),
    '3rd Quartile': quartiles(arr, 0.75),
    'Max': Math.max(...arr),
    'Sum': sum(arr)
  }
}
module.exports = summary
