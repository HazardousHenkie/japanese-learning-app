<template>
    <button
        :type="type"
        :disabled="disabled || loading"
        class="min-h-40 min-width-100 mx-auto flex flex-col items-center justify-center relative border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
    >
        <font-awesome-icon
            v-if="loading"
            icon="circle-notch"
            class="text-white text-lg m-0 animate-spin"
        />

        <slot v-else />
    </button>
</template>

<script lang="ts">
export default {
    name: 'Card',
    props: {
        type: {
            type: String,
            require: true,
            default: 'submit'
        },
        disabled: {
            type: Boolean,
            require: false,
            default: false
        },
        loading: {
            type: Boolean,
            require: false,
            default: false
        }
    }
}
</script>
