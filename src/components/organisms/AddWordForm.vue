<template>
    <card>
        <dynamic-form title="Add word" button-text="submit">
            <dynamic-input
                :value="modelValue"
                name="word"
                label="Word"
                :error-message="wordError"
            />

            <dynamic-input
                :value="modelValue"
                name="meaning"
                label="Meaning"
                :error-message="meaningError"
            />

            <dynamic-input
                :value="modelValue"
                name="reading"
                label="Meaning"
                :error-message="readingError"
            />
        </dynamic-form>
    </card>
</template>

<script lang="ts">
import Input from '@/molecules/Input.vue'
import Card from '@/atoms/Card.vue'
import Form from '@molecules/form.vue'

export default {
    name: 'AddWordTemplate',
    components: { Card, 'dynamic-input': Input, 'dynamic-form': Form },
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
