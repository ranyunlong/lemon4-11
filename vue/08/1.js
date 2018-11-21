// 对象的解构 （解开对象的结构）

// var a = { 
//     name: '张三',
//     age: 20,
//     // size: 100
// }


// const { age, name, size } = a
// 解构不分先后顺序 只要和对象的key 匹配就行
// 上面这个语法将生成以下语法
// const name = a.name
// const age = a.age 

// console.log(name)
// console.log(age)

// 对象的解构赋值
// const { age, name, size = 10 } = a
// 上面这个语法将生成以下语法
// const size = a.size || {}

// console.log(size)


// 数组的解构 （解开数组的结构）
// 数组是数组必须按照顺序进行解构的
// const arr = [1, 2, 3, 4, 5]

// 数组的解构赋值
// const [ b, a, c, d, e, f = 6 ] = arr
// console.log(a,b,c,f)

// ... more 剩余参数截取

// const arr = [1, 2, 3, 4, 5]
// const [a,b,...c] = arr
// 这里的c意思是剩下的都是他的 ...必须写到最后

// function test(a, b, ...c) {

// }

// 对象的剩余参数截取
// const test = {
//     a: 100,
//     b: 200,
//     c: 300
// }

// const { a, ...b } = test

// console.log(b)

//... 混入参数

// var b = {
//     a: 1
// }

// var a = {
//     x: 1,
//     ...b // 把对象b里的成员混入到a里
// }

// var arr = {
//     a: []
// }

// var c = {
//     ...b,
//     ...a,
//     ...arr
// }

// 对象的混入只能混入对象


// var a = [1,2,3]

// var b = [1,2]

// var obj = {a:100}

// var c = [...a, ...b]
// 数组的混入只能混入数组
// a.push(...b)

// console.log(a)