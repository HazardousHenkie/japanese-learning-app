<template>
    <div class="flex flex-col pb-6">
        <label
            :for="name"
            class="mb-1 text-md font-medium tracking-wide text-gray-300"
            >{{ label }}</label
        >
        <input
            class="relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2"
            type="text"
            :value="modelValue"
            :name="name"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <span
            class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
            :if="errorMessage !== ''"
            >{{ errorMessage }}</span
        >
    </div>
</template>

<script lang="ts">
export default {
    name: 'Input',
    inject: ['modelValue'],
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
        },
        modelValue: {
            type: String,
            require: true,
            default: ''
        },
        errorMessage: {
            type: String,
            require: true,
            default: ''
        }
    },

    emits: ['update:modelValue']
}
</script>
