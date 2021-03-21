<template>
    <form class="w-full md:w-3/6" @submit="onSubmit">
        <custom-title class="mb-6" :title="title" />

        <slot />

        <dynamic-button type="submit" :loading="isSubmitting">
            {{ buttonText }}
        </dynamic-button>
    </form>
</template>

<script lang="ts">
import Button from '@/components/atoms/Button.vue'
import Title from '../atoms/Title.vue'

export default {
    name: 'AddWordTemplate',
    components: { 'dynamic-button': Button, 'custom-title': Title },
    props: {
        onSubmit: {
            type: Function,
            require: true,
            default: () => null
        },
        isSubmitting: {
            type: Boolean,
            require: false,
            default: false
        },
        title: {
            type: String,
            require: true,
            default: ''
        },
        buttonText: {
            type: String,
            require: true,
            default: ''
        }
    }
}
</script>
