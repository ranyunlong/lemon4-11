<template>
    <i 
        :class="['iconfont icon-' + type]" 
        :style="{
            color,
            fontSize
        }">
    </i>
</template>

<script>
    export default {
        props: {
            type: String,
            color: String,
            size: {
                type: [Number, String],
                default: 22
            }
        },
        computed: {
            fontSize() {
                if (/px$/.test(this.size)) {
                    return this.size
                }
                return this.size + 'px'
            }
        }
    }
</script>

<style>

</style>