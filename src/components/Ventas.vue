<template>
    <div>
        <h4>soy ventas</h4>
        <v-btn @click="sumar()">suma</v-btn>
        <h6>{{this.$store.state.valor}}</h6>
    </div>
</template>

<script>
export default {
    methods:{
        sumar(){
            this.$store.state.valor+=5;
        }
    }
}
</script>

<style scoped>

</style>