<template>
    <div>
       <h1>{{ dog }}</h1>
      
    </div>
</template>

<script setup>
    import { onBeforeMount, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import SpecificData from '@/components/SpecificData.vue';

    const route = useRoute();
    const dog = ref({})
    async function getData(id){
         try{
            const response = await fetch(`https://data.cityofnewyork.us/resource/rsgh-akpg.json?$where=:id="${id}"`)
            const data = await response.json();
            dog.value = data
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