<template>
    <button :class="['btn','btn-' + type, {
        'btn-lg': size === 'large' || large,
        'btn-sm': size === 'small' || small,
        'btn-block': long
    }]">
        <Icon :name="icon" />
        <slot/>
    </button>
</template>

<script>
    import Icon from './Icon'
    export default {
        name: 'Button',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String,
            large: Boolean,
            small: Boolean,
            long: Boolean,
            icon: String
        },
        components: {
            Icon
        }
    }
</script>

<style scoped>

</style>