Vue.component('Progress', {
    props: {
        value: Number
    },
    template: `
    <div class="progress">
        <div class="progress-bar" :style="{
            width: value + '%'
        }">
            <span class="sr-only">60% Complete</span>
        </div>
    </div>
    `
})