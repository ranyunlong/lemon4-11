Vue.component('Swicher', {
    props: {
        value: Boolean
    },
    template: `
        <div 
            @click="iValue = !iValue"
            :class="['swicher', {
                on: iValue
            }]">
            <span></span>
        </div>
    `,
    data() {
        return {
            iValue: this.value
        }
    },
    watch: {
        iValue(v) {
            this.$emit('input', v)
        },
        value(v) {
            this.iValue = v
        }
    }
})