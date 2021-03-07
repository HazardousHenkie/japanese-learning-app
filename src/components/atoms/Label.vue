<template>
    <label
        :for="name"
        class="mb-1 text-md font-medium tracking-wide text-gray-300"
        >{{ label }}</label
    >
</template>

<script lang="ts">
export default {
    name: 'Label',
    props: {
        name: {
            type: String,
            require: true,
            default: ''
        },
        label: {
            type: String,
            require: true,
            default: ''
        }
    }
}
</script>
