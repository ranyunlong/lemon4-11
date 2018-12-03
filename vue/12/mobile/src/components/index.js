import Icon from './Icon'
import Screen from './Screen'

const components = {
    Icon,
    Screen
}

export default {
    install(Vue) {
        Object.keys(components).forEach(k => {
            Vue.component('Mt'+k, components[k])
        })
    }
}