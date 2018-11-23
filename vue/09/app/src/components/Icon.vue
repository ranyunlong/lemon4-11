<template>
    <i  
        :style="{
            color,
            fontSize: size + 'px' 
        }" 
        :class="['glyphicon','glyphicon-' + name]">
    </i>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            size: Number,
            color: String
        }
    }
</script>

<style scoped>
</style>