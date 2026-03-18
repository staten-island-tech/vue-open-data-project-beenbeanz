<template>
    <div>
        <h1>borough: {{ dog.borough }}</h1>
        <h2>"unique" id: {{ dog.uniqueid }}</h2>
        <h2>date of bite: {{ dog.dateofbite }}</h2>
        <h2>breed: {{ dog?.breed }}</h2>
        <h2>gender: {{ dog.gender }}</h2>
        <h2>spayed/neutered: {{ dog.spayneuter }}</h2>
    </div>
</template>

<script setup>
    import { onBeforeMount, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const dog = ref({})
    async function getData(id){
        console.log("getData called with id:", id) 
         try{
            const response = await fetch(`https://data.cityofnewyork.us/resource/rsgh-akpg.json?$where=:id="${id}"`)
            const data = await response.json();
            dog.value = data[0]
        }
        catch(err){
            console.log(err)
        }
    }

    onBeforeMount(() => {
        getData(route.params.id)
    })
    
    
    watch(() => route.params.id,
    function (id) {
        getData(id)
    })
</script>

<style scoped>

</style>