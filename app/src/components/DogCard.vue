<template>
    <router-link :to="dogPath">
        <h3>{{ dog.borough }}</h3>
        <h3>{{ dog.breed }}</h3>
    </router-link>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        dog: {
            type: Object,
            required: true,
        },
    })

    const dogPath = computed(() => {
        return `/dog/${props.dog.uniqueid}`
    })
</script>

<style scoped>

</style>