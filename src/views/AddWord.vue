<template>
    <form @submit="onSubmit">
        <!-- TODO: move to seperate component -->
        <!-- TODO: add styling -->
        <input v-model="word" name="word" />
        <span>{{ wordError }}</span>

        <input v-model="meaning" name="meaning" />
        <span>{{ meaningError }}</span>

        <input v-model="reading" name="reading" />
        <span>{{ readingError }}</span>

        <button type="submit" :disabled="isSubmitting">Submit</button>
    </form>
</template>

<script lang="ts">
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'

export default {
    name: 'AddWord',
    setup() {
        const schema = yup.object({
            word: yup.string().required(),
            meaning: yup.string().required(),
            reading: yup.string().required()
        })

        const { handleSubmit, isSubmitting } = useForm({
            validationSchema: schema
        })

        const onSubmit = handleSubmit(formValues => {
            console.log(formValues)
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
