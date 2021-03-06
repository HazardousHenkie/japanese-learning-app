<template>
    <add-word-template
        :on-submit="onSubmit"
        :is-submitting="isSubmitting"
        :word="word"
        :word-error="wordError"
        :meaning="meaning"
        :meaning-error="meaningError"
        :reading="reading"
        :reading-error="readingError"
    />
</template>

<script lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

import AddWordTemplate from '@/templates/AddWord/index.vue'
import doAPiCall from '@/utils/requestUtils.ts'

import api from '@/api'
import Word from '@/types/words'

export default {
    name: 'AddWord',
    components: { AddWordTemplate },

    setup() {
        const schema = yup.object({
            word: yup.string().required(),
            meaning: yup.string().required(),
            reading: yup.string().required()
        })

        const { handleSubmit, isSubmitting } = useForm({
            validationSchema: schema
        })

        const onSubmit = handleSubmit(async (formValues, { resetForm }) => {
            await doAPiCall<Word>(api().v1.Words.getWords, formValues as Word)
            resetForm()
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
