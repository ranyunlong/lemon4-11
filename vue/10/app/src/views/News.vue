<template>
    <div>
        <h1>新闻</h1>
        <ul>
            <li 
                v-for="(item, index) in 10" 
                :key="index">
                <router-link :to="'/news/'+ index">新闻{{index}}</router-link>
            </li>
        </ul>
        <router-view />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>