<template>
    <full-page-loader v-if="pageLoading" />
    <dashboard-template v-else :words="words" />
</template>

<script lang="ts">
import { Ref, ref, onMounted } from 'vue'
import DashboardTemplate from '@/components/templates/Dashboard/index.vue'
import FullPageLoader from '@/components/molecules/FullPageLoader.vue'

import doApiCall from '@/utils/requestUtils.ts'

import api from '@/api'
import Word from '@/types/words'

export default {
    name: 'Dashboard',
    components: { DashboardTemplate, FullPageLoader },
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

        return {
            words,
            pageLoading
        }
    }
}
</script>
