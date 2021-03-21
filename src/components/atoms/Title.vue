<template>
    <h1 class="text-3xl text-gray-300">
        {{ title }}
    </h1>
</template>

<script lang="ts">
export default {
    name: 'Title',
    props: {
        title: {
            type: String,
            require: true,
            default: ''
        }
    }
}
</script>
