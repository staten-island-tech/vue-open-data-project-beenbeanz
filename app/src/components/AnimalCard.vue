<template>
    <router-link :to="animalPath">
        <h2>{{ animal.species_description }}</h2>
        <h3>{{ animal.borough }}</h3>
        <h3>{{ animal.property  }}</h3>
        <h4>{{ index }}</h4>
    </router-link>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        animal: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true
        }
    })

    const animalPath = computed(() => {
        return `/animal/${props.index}`
    })
</script>

<style scoped>

</style>