<template>
    <add-word-template :submit-function="submitFunction" />
</template>

<script lang="ts">
import AddWordTemplate from '@/components/templates/AddWord.vue'
import doApiCall from '@/utils/requestUtils.ts'

import api from '@/api'
import Word from '@/types/words'

export default {
    name: 'AddWord',
    components: { AddWordTemplate },
    setup() {
        const submitFunction = async (formValues: Word) => {
            await doApiCall<Word>(api().v1.Words.post, formValues)
        }

        return {
            submitFunction
        }
    }
}
</script>
