Vue.component('Icon', {
    props: {
        name: {
            type: String,
            required: true
        },
        size: Number,
        color: String
    },
    template: `
        <i  
        :style="{
            color,
            fontSize: size + 'px' 
        }" 
        :class="['glyphicon','glyphicon-' + name]"></i>
    `
})