<template>
        <h2>{{dog["breed"]}}</h2>
        <h2>{{ dog.uniqueid }}</h2>
        <h2>{{ dog.borough }}</h2>
</template>

<script setup>

    const props = defineProps({
        dog: {
            type: Object,
            required: true,
        },
    })

</script>

<style scoped>

</style>