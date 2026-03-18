<template>
    <div class="container">
        <DogCard
            v-for="dog in dogs"
            :key="dog.id"
            :dog="dog"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DogCard from '@/components/DogCard.vue';

const dogs = ref([])
async function getData(){
    try{
        const response = await fetch("https://data.cityofnewyork.us/api/v3/views/rsgh-akpg/query.json?pageNumber=1&pageSize=10&app_token=NsvMFBdPA7R6YnKsb2BiHNbyE")
        const data = await response.json();
        dogs.value = data;
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