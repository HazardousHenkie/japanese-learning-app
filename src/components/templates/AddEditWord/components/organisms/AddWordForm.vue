<template>
    <card>
        <dynamic-form
            :title="id ? 'Edit Word' : 'Add word'"
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
import { PropType, watch } from '@vue/runtime-core'
import Word from '@/types/words'

export default {
    name: 'AddWordTemplate',
    components: {
        Card,
        'dynamic-form': Form,
        InputField
    },
    props: {
        id: {
            type: String,
            require: true,
            default: null
        },
        editWord: {
            type: Object as PropType<Word>,
            required: false,
            default: undefined
        },
        addFunction: {
            type: Function,
            require: true,
            default: () => null
        },
        editFunction: {
            type: Function,
            require: true,
            default: () => null
        }
    },
    setup(props) {
        const schema = yup.object({
            word: yup.string().required(),
            meaning: yup.string().required(),
            reading: yup.string().required()
        })

        const { handleSubmit, isSubmitting, setValues } = useForm({
            initialValues: { ...props.editWord },
            validationSchema: schema
        })

        watch(
            () => props.editWord,
            () => {
                if (props.editWord) {
                    setValues({
                        ...props.editWord
                    })
                }
            }
        )

        const onSubmit = handleSubmit(async (formValues, { resetForm }) => {
            if (props.id) {
                await props.addFunction(formValues)
            } else {
                await props.editFunction(formValues)
            }
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
