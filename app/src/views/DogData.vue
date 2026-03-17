<template>
    <div>
        <h2>{{dog.breed}}</h2>
        <h2>{{ dog.uniqueid }}</h2>
    </div>
</template>

<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const animal = ref({})
    async function getData(id){
         try{
            const response = await fetch(``)
            const data = await response.json();
            animal.value = data
        }
        catch(err){
            console.log(err)
        }
    }

    onMounted(() => {
        getData(route.params.id)
    })

    watch(() => route.params.id,
    function (id) {
        getData(id)
    })
</script>

<style scoped>

</style>