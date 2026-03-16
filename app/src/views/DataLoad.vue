<template>
    <div class="container">
        <AnimalCard
            v-for="(animal, index) in animals"
            :key="animal.species_description"
            :animal="animal"
            :index="index + 1"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AnimalCard from '@/components/AnimalCard.vue';

const animals = ref([])
async function getData(){
    try{
        const response = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
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
    .container {
        width: 80vw;
        margin: 30px auto;
        gap: 50px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
</style>