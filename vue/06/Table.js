Vue.component('Table', {
    props: {
        column: [Array, Object],
        data: Array,
        strip: Boolean,
        border: Boolean
    },
    template: `
    <div class="i-table">
        <table 
            :class="['table',{
                'table-striped': strip,
                'table-bordered': border
            }]">
            <thead>
                <tr>
                    <th v-for="item in column">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td v-for="td in item">{{td}}</td>
                </tr>
            </tbody>
        </table>
        <div v-if="data.length === 0" class="text-center">暂无内容</div>
    </div>
    `
})