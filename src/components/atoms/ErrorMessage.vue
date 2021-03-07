<template>
    <span
        class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
        :if="errorMessage !== ''"
        >{{ errorMessage }}</span
    >
</template>

<script lang="ts">
export default {
    name: 'ErrorMessage',
    props: {
        errorMessage: {
            type: String,
            require: true,
            default: ''
        }
    },

    emits: ['update:modelValue']
}
</script>
