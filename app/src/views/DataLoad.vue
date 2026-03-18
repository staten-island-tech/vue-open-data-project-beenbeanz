<template>
    <div class="container">
        <DogCard
            v-for="dog in dogs"
            :key="dog.id"
            :dog="dog"
        />
    </div>
<D3PieChart :config="chart_config" :datum="chart_data"></D3PieChart>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import DogCard from '@/components/DogCard.vue';
import { D3PieChart } from 'vue-d3-charts';

const chart_data = [{
  name: "Lorem",
  total: 30
},{
  name: "Ipsum",
  total: 21
},{
  name: "Dolor",
  total: 20
}]

const chart_config = {
  key: false,
  radius: {
    inner: false,
    outter: false,
    padding: 0,
    round: 0,
  },
  value: false,
  color: {
    key: false,
    keys: false,
    scheme: false,
    current: "#1f77b4",
    default: "#AAA",
    axis: "#000",
  },
  currentKey: false,
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  },
  transition: {
    duration: 350,
    ease: "easeLinear",
  },
}

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