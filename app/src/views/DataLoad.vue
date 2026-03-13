<template>
    <div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AnimalCard from '@/components/AnimalCard.vue';

const animals = ref([])
async function getData(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0')
        const data = await response.json();
        animals.value = data;
    }
    catch(err){
        console.log(err)
    }
}

onMounted(() => {
    getData();
})
</script>

<style scoped>

</style>