<template>
    <router-link :to="dogPath">
        <h3>{{ dog.borough }}</h3>
        <h3>{{ dog.breed === "UNKNOWN" ? '' : dog.breed }}</h3>
        <h3>{{ dog[":id"] }}</h3>
        <h3>{{ dogPath }}</h3>
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
        return `/dog/${props.dog[":id"]}`
    })
</script>

<style scoped>

</style>