<template>
    <add-word-form
        :id="id"
        :edit-word="editWord"
        :add-function="addFunction"
        :edit-function="editFunction"
    />
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import AddWordForm from './components/organisms/AddWordForm.vue'
import Word from '@/types/words'

export default {
    name: 'AddWordTemplate',
    components: { AddWordForm },
    props: {
        id: {
            type: String,
            required: false,
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
    }
}
</script>
