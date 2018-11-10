// const a = function() {}

// 箭头函数 普通用法
// const b = () => {}

// function Tclass() {
//     this.name = 'test'

//     // const a = () => {
//     //     // 在箭头函数里 它可以获取到父作用域的this指向
//     //     // 相反普通函数是不能获取到的
//     //     console.log(this.name)
//     // }
//     setTimeout(() => {
//         console.log(this.name)
//     }, 100)
//     // a()
// }

// new Tclass()


// function a(num) {
//     console.log(num)
// }

// 在箭头函数只有一个参数的情况下 可以不要括号
// const a = num => { 
//     console.log(num)
// }

// a(100)

// 多参数的函数
// function test(a, b) {}
// const test = (a, b) => { 
//     console.log(a, b)
// }

// test(1,2)


// 有返回值的函数
// function test(a, b) {
//     return a + b
// }

// 箭头函数写了括号的情况下 默认没有返回值
// const test = (a, b) => {
//    return a + b
// }

// 箭头函数没有括号 直接带返回值 （缺点 箭头后不能多行代码）
// 函数里只有一行代码时 可以使用这个方法
// const test = (a, b) => a + b


// console.log(test(1,2))

// 数组
const arr = [1,2,3,4]

// 需要得到一个新数组 把2去掉
// 循环数组 返回一个新的数组 过滤数组的
// arr.filter()
// 循环数组 返回一个新的数组 生成一个新的数组
// arr.map()
// 循环数组
// arr.forEach()

// 以上三个函数都接收1 个匿名函数 匿名函数中接收3个参数
// 1. 数组循环的值
// 2. 数组循环的下标
// 3. 原数组
// arr.forEach(a => {
//     console.log(a)
// })

// map函数会返回一个新生成的数组
// 主要是根据另一个数组 组合一个新的数组
// const map = arr.map((i, index, arr) => ({id: i, index: index, origin: arr}))

// filter 过滤 会生成一个新数组
// filter 会根据每一次循环项目的返回值来决定（布尔值）新的数组里 该不该留下原数组里的成员
// const filter = arr.filter(i => (i !== 2 && i !== 3))

// console.log(filter)


var name = "zhansgan"

const obj = {
   name
}