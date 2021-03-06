<template>
    <card>
        <form class="w-full md:w-3/6" @submit="onSubmit">
            <h1 class="text-3xl mb-6 text-gray-300">{{ title }}</h1>

            <slot />

            <dynamic-button type="submit" :loading="isSubmitting">
                {{ buttonText }}
            </dynamic-button>
        </form>
    </card>
</template>

<script lang="ts">
import Card from '@/atoms/Card.vue'
import Button from '@/atoms/Button.vue'

export default {
    name: 'AddWordTemplate',
    components: { Card, 'dynamic-button': Button },
    props: {
        onSubmit: {
            type: () => Promise,
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
