<template>
    <div>
        <h2>soy compras</h2>
        <h4>{{valorStore}}</h4>
    </div>
</template>

<script>
export default {
    computed:{
        valorStore(){
            return this.$store.state
        }
    }
}
</script>

<style scoped>

</style>