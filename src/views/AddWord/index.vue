<template>
    <card>
        <form class="w-full md:w-3/6" @submit="onSubmit">
            <dynamic-input
                v-model="word"
                name="word"
                label="Word"
                :error-message="wordError"
            />

            <dynamic-input
                v-model="meaning"
                name="meaning"
                :error-message="meaningError"
            />

            <dynamic-input
                v-model="reading"
                name="reading"
                :error-message="readingError"
            />

            <dynamic-button type="submit" :disabled="isSubmitting">
                Submit
            </dynamic-button>
        </form>
    </card>
</template>

<script lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

import Input from '@/components/molecules/Input.vue'
import Card from '@/components/atoms/Card.vue'
import Button from '@/components/atoms/Button.vue'
import api from '@/api'
import Word from '@/types/words'

export default {
    name: 'AddWord',
    components: { Card, 'dynamic-input': Input, 'dynamic-button': Button },

    setup() {
        const schema = yup.object({
            word: yup.string().required(),
            meaning: yup.string().required(),
            reading: yup.string().required()
        })

        const { handleSubmit, isSubmitting } = useForm({
            validationSchema: schema
        })

        const onSubmit = handleSubmit(async formValues => {
            //TODO: add to new function?
            // https://labs.thisdot.co/blog/vue-3-composition-api-do-you-really-need-it
            // https://blog.logrocket.com/how-to-build-applications-with-vues-composition-api/
            // TODO: add token
            try {
                // TODO: Add loading
                await api().v1.Words.create('', formValues as Word)
            } catch (error) {
                console.error(error)
            }
        })

        const { value: word, errorMessage: wordError } = useField('word')
        const { value: meaning, errorMessage: meaningError } = useField(
            'meaning'
        )
        const { value: reading, errorMessage: readingError } = useField(
            'reading'
        )

        return {
            onSubmit,
            isSubmitting,
            word,
            wordError,
            meaning,
            meaningError,
            reading,
            readingError
        }
    }
}
</script>
