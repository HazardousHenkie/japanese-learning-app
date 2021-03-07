<template>
    <input
        class="relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2"
        type="text"
        :value="modelValue"
        :name="name.value"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script lang="ts">
export default {
    name: 'Input',
    props: {
        name: {
            type: String,
            require: true,
            default: ''
        },
        modelValue: {
            type: String,
            require: true,
            default: ''
        }
    },
    emits: ['update:modelValue']
}
</script>
