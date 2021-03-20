<template>
    <add-word-template
        :id="id"
        :edit-word="word"
        :add-function="addFunction"
        :edit-function="editFunction"
    />
</template>

<script lang="ts">
import { Ref, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AddWordTemplate from '@/components/templates/AddEditWord/index.vue'
import doApiCall from '@/utils/requestUtils.ts'

import api from '@/api'
import Word from '@/types/words'

export default {
    name: 'AddWord',
    components: { AddWordTemplate },
    setup() {
        const { params } = useRoute()

        const word: Ref<Word | undefined> = ref(undefined)

        onMounted(async () => {
            const { data } = await doApiCall<{ results: Word }>(
                api().v1.Words.getSingleWord,
                params.id
            )

            word.value = data
        })

        const addFunction = async (formValues: Word) => {
            await doApiCall<Word>(api().v1.Words.post, formValues)
        }

        const editFunction = async (formValues: Word) => {
            await doApiCall<Word>(api().v1.Words.patch, formValues)
        }

        return {
            id: params.id,
            word,
            addFunction,
            editFunction
        }
    }
}
</script>
