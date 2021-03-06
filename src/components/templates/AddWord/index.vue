<template>

        <add-word-form>
      
</template>

<script lang="ts">
import Input from '@/molecules/Input.vue'
import Card from '@/atoms/Card.vue'
import Button from '@/atoms/Button.vue'

export default {
    name: 'AddWordTemplate',
    components: { Card, 'dynamic-input': Input, 'dynamic-button': Button },
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
        modelValue: {
            type: String,
            require: true,
            default: ''
        },
        word: {
            type: String,
            require: true,
            default: ''
        },
        wordError: {
            type: String,
            require: false,
            default: ''
        },
        meaning: {
            type: String,
            require: true,
            default: ''
        },
        meaningError: {
            type: String,
            require: false,
            default: ''
        },
        reading: {
            type: String,
            require: true,
            default: ''
        },
        readingError: {
            type: String,
            require: false,
            default: ''
        }
    }
}
</script>
