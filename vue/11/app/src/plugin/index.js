export default {
    install(Vue, options) {
        // 写混入
        Vue.mixin({
            data() {
                return {
                    $aaa: {}
                }
            },
        })
        // 写组件
        Vue.component('Test', {
            template: '<div>test</div>'
        })
        // 写指令
        Vue.directive('focus', {})
        
        // 写过滤器
        Vue.filter('a', function() {
            
        })
    }
}


// vue的插件必须带有install 方法
// install 会接收两个参数 
// 一个是Vue的构造函数
// 自定义的参数 一般是一个