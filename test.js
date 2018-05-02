var tape = require('tape')
var summary = require('./index.js')
var arr = [1,2,3,4,5,6,7,8,9,10]
var out = Object.values(summary(arr))

tape('Output is', function (t) {
  t.ok(out, 'is true')
  t.end()
})

tape('Min is', function (t) {
  t.ok(out[0] === Math.min(...arr), 'is true')
  t.end()
})

tape('Sum is', function (t) {
  var result = 0
  for (var i = 0; i < arr.length; i++){
    result += arr[i]
  }
  t.ok(out[5] === result, 'is true')
  t.end()
})

tape('Max is', function (t) {
  t.ok(out[4] === Math.max(...arr), 'is true')
  t.end()
})

tape('Quartiles are', function (t) {
  t.ok(out[1], '1st quartile is true')
  t.ok(out[3], '3rd quartile is also true')
  t.end()
})
