<template>
    <full-page-loader v-if="pageLoading" />

    <template v-else>
        <template v-if="id && word">
            <add-word-template
                :id="id"
                :edit-word="word"
                :add-function="addFunction"
                :edit-function="editFunction"
            />
        </template>
        <template v-else>
            <page-not-found-template />
        </template>
    </template>
</template>
<script lang="ts">
import { Ref, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AddWordTemplate from '@/components/templates/AddEditWord/index.vue'
import PageNotFoundTemplate from '@/components/templates/PageNotFound/index.vue'
import doApiCall from '@/utils/requestUtils.ts'

import api from '@/api'
import Word from '@/types/words'
import FullPageLoader from '@/components/molecules/FullPageLoader.vue'

export default {
    name: 'AddWord',
    components: { AddWordTemplate, PageNotFoundTemplate, FullPageLoader },
    setup() {
        const { params } = useRoute()

        const word: Ref<Word | undefined> = ref(undefined)
        const pageLoading: Ref<boolean> = ref(true)

        onMounted(async () => {
            if (params.id) {
                const { data, loading } = await doApiCall<
                    Word,
                    string[] | string
                >(api().v1.Words.getSingleWord, params.id)

                word.value = data
                pageLoading.value = loading as boolean
            } else {
                pageLoading.value = false
            }
        })

        const addFunction = async (formValues: Word) => {
            await doApiCall<Word, Word>(api().v1.Words.post, formValues)
        }

        const editFunction = async (formValues: Word) => {
            await doApiCall<Word, { id: string; data: Word }>(
                api().v1.Words.patch,
                {
                    id: params.id as string,
                    data: formValues
                }
            )
        }

        return {
            id: params.id,
            pageLoading,
            word,
            addFunction,
            editFunction
        }
    }
}
</script>
