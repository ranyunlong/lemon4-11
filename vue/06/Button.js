Vue.component('Button', {
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: String,
        large: Boolean,
        small: Boolean,
        long: Boolean
    },
    template: `
    <button :class="['btn','btn-' + type, {
        'btn-lg': size === 'large' || large,
        'btn-sm': size === 'small' || small,
        'btn-block': long
    }]">
        <slot/>
    </button>
    `
})