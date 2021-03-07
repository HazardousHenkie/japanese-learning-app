<template>
    <dashboard-template
        :words="words"
        :step="step"
        :previous-step="previousStep"
        :next-step="nextStep"
    />
</template>

<script lang="ts">
import { ref, Ref } from 'vue'

import DashboardTemplate from '@/components/templates/Dashboard.vue'

import doApiCall from '@/utils/requestUtils.ts'

import api from '@/api'
import Word from '@/types/words'

export default {
    name: 'Dashboard',
    components: { DashboardTemplate },
    async setup() {
        const step: Ref<number> = ref(0)

        const { data } = await doApiCall<{ results: Word[] }>(
            api().v1.Words.getWords
        )

        console.log(data?.results)
        const words = data

        const previousStep = () => {
            step.value--
        }
        const nextStep = () => {
            step.value++
        }

        return {
            words,
            step,
            previousStep,
            nextStep
        }
    }
}
</script>
