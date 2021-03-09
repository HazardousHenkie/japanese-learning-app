<template>
    <card>
        <dynamic-form
            title="Add word"
            button-text="submit"
            :on-submit="onSubmit"
            :is-submitting="isSubmitting"
        >
            <input-field
                v-model="word"
                name="word"
                label="Word"
                :error-message="wordError"
            />

            <input-field
                v-model="meaning"
                name="meaning"
                label="Meaning"
                :error-message="meaningError"
            />

            <input-field
                v-model="reading"
                name="reading"
                label="Meaning"
                :error-message="readingError"
            />
        </dynamic-form>
    </card>
</template>

<script lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

import Card from '@/components/atoms/Card.vue'
import Form from '@/components/molecules/Form.vue'
import InputField from '@/components/molecules/InputField.vue'

export default {
    name: 'AddWordTemplate',
    components: {
        Card,
        'dynamic-form': Form,
        InputField
    },
    props: {
        submitFunction: {
            type: Function,
            require: true,
            default: () => null
        }
    },
    setup(props: Readonly<{ submitFunction: Function }>) {
        const schema = yup.object({
            word: yup.string().required(),
            meaning: yup.string().required(),
            reading: yup.string().required()
        })
        const { handleSubmit, isSubmitting } = useForm({
            validationSchema: schema
        })

        const onSubmit = handleSubmit(async (formValues, { resetForm }) => {
            await props.submitFunction(formValues)
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
