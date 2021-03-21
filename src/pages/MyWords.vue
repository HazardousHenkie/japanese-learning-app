<template>
    <full-page-loader v-if="pageLoading" />

    <my-words-template
        v-else
        :words="words"
        :delete-function="deleteFunction"
    />
</template>

<script lang="ts">
import { Ref, ref, onMounted } from 'vue'
import MyWordsTemplate from '@/components/templates/MyWords/index.vue'
import FullPageLoader from '@/components/molecules/FullPageLoader.vue'

import doApiCall from '@/utils/requestUtils.ts'

import api from '@/api'
import Word from '@/types/words'

export default {
    name: 'Dashboard',
    components: { MyWordsTemplate, FullPageLoader },
    setup() {
        const words: Ref<Word[] | undefined> = ref([])
        const pageLoading: Ref<boolean> = ref(true)

        onMounted(async () => {
            const { data, loading } = await doApiCall<{ results: Word[] }>(
                api().v1.Words.getWords
            )

            words.value = data?.results
            pageLoading.value = loading as boolean
        })

        const deleteFunction = async (wordId: string) => {
            await doApiCall<string, string>(api().v1.Words.delete, wordId)

            if (words.value) {
                words.value = words.value.filter(word => word.id !== wordId)
            }
        }
        return {
            words,
            deleteFunction,
            pageLoading
        }
    }
}
</script>
