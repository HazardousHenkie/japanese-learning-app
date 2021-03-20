<template>
    <my-words-template :words="words" :delete-function="deleteFunction" />
</template>

<script lang="ts">
import { Ref, ref, onMounted } from 'vue'
import MyWordsTemplate from '@/components/templates/MyWords/index.vue'

import doApiCall from '@/utils/requestUtils.ts'

import api from '@/api'
import Word from '@/types/words'

export default {
    name: 'Dashboard',
    components: { MyWordsTemplate },
    setup() {
        const words: Ref<Word[] | undefined> = ref([])
        onMounted(async () => {
            const { data } = await doApiCall<{ results: Word[] }>(
                api().v1.Words.getWords
            )

            words.value = data?.results
        })

        const deleteFunction = async (wordId: string) => {
            await doApiCall<string>(api().v1.Words.delete, wordId)

            if (words.value) {
                words.value = words.value.filter(word => word.id !== wordId)
            }
        }
        return {
            words,
            deleteFunction
        }
    }
}
</script>
