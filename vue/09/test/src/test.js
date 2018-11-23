function test() {
    alert('test')
}

export function test1() {
    alert('test1')
}

export const a = 100

export let c = 100

// module.exports = {
//     test
// }
export default test

// 包含导出
// 可以把它的js文件一起导出给使用当前这个js的人使用
export * from './tt'
// export * from './tt' 导出 './tt.js'文件里的所有导出
// export { run } from './tt' 导出 './tt.js'文件里的导出的run方法

// 在es6里使用 export default 代替  module.exports导出
// 按需导出 不使用默认的导出

// 1. 默认导出

// 默认导出可以导出任意类型的数据
// 需要使用 import xx from ''  来使用
// 默认导出的内容直接存在xx上的

// 2. 导出方式
// export const a = 100
// 默认导出的内容 必须是由 let var function class const 声明的变量或函数
// export 导出是比要声明过后才能导出的
// export 导出的内容需要对象解构的方式来使用
// 导出时使用的什么名称 导入时就需要使用什么名称

// export const a = 100
// export function b() {}
// import { a, b } from ''

// 3. 混合使用
// 如果即需要默认导出的内容也需要 按需导出的内容
// import xx, { a, b } from ''
// import 后面的第一个变量里面包含 默认导出的东西
// ,{} 后面包含 按需导出的内容

// 4. 混合使用方式2

// import * as xx from ''