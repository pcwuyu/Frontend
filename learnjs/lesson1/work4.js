// 测试函数的模式
var ensure = function (condition, message) {
    if (!condition) {
        log(message)
    } else {
        log('ok!')
    }
}

// log函数，用于输入
log = function () { console.log.apply(console, arguments) }


// 求一个数组和得函数 
var sum = function (array) {
    var s = 0
    for (var i = 0; i < array.length; i++) {
        var n = array[i]
        s = s + n
    }
    return s
}

// 测试函数 Sum 函数
var testSum = function () {
    var numbers = [1, 2, 3, 4]
    var value = 11
    ensure(value == sum(numbers), 'sum error')
}

//testSum()

// 求乘积函数
var product = function (array) {
    var s = 1
    for (var i = 0; i < array.length; i++) {
        var n = array[i]
        s = s * n
    }
    return s
}

var testProduct = function () {
    ensure(product([1, 2, 3]) === 6, 'test 1 error ')
    ensure(product([1, 2, 4]) === 7, 'test 2 error ')

}

//testProduct()

// 求绝对值函数
var abs = function (n) {
    if (n < 0) {
        return -n
    } else {
        return n
    }
}
// abs测试函数
var testAbs = function () {
    ensure(abs(1) == 1, '1错误')
    ensure(abs(-1) == -1, '2错误')
    ensure(abs(0) == 0, '3错误')
}

//testAbs()


// object 对象-=-字典
var ss = {
    'menthod': 'aes-256-cfb',
    'pass': '123123'
}

// log(ss.pass)
// 增加值
ss['host'] = '123.23.23.1'
//log(ss.host)
// 减少值
delete ss.host
//log(ss.host)

// 递归
var fac = function (n) {
    if (n == 0) {
        return 1
    } else {
        return n * fac(n - 1)
    }
}

log(fac(5))

var fib = function (n) {
    if (n == 1 || n == 2) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }

}

log(fib(1111))