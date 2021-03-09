<template>
    <dashboard-template :words="words" />
</template>

<script lang="ts">
import { Ref, ref, onMounted } from 'vue'
import DashboardTemplate from '@/components/templates/Dashboard/index.vue'

import doApiCall from '@/utils/requestUtils.ts'

import api from '@/api'
import Word from '@/types/words'

export default {
    name: 'Dashboard',
    components: { DashboardTemplate },
    setup() {
        const words: Ref<Word[] | undefined> = ref([])
        onMounted(async () => {
            const { data } = await doApiCall<{ results: Word[] }>(
                api().v1.Words.getWords
            )

            words.value = data?.results
        })

        return {
            words
        }
    }
}
</script>
