<template>
    <div class="mint-screen">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.mint-screen {
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
}
</style>