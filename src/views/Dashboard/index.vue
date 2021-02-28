<template>
    <div class="relative w-full">
        <p class="text-center text-4xl text-gray-300 mb-5">
            {{ step + 1 }} / {{ words.length }}
        </p>

        <button
            v-if="step !== 0"
            @keyup.left="previousStep"
            @click="previousStep"
        >
            <font-awesome-icon
                icon="chevron-left"
                class="text-4xl text-gray-300 absolute left-4 top-1/2"
            />
        </button>
        <card><word-card-content :word="words[step]" :step="step"/></card>

        <button
            v-if="words.length > step + 1"
            @keyup.right="nextStep"
            @click="nextStep"
        >
            <font-awesome-icon
                icon="chevron-right"
                class="text-4xl text-gray-300 absolute right-4 top-1/2"
            />
        </button>
    </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
import Card from '@/components/atoms/Card.vue'
import WORDS from '@/utils/constants'
import WordCardContent from './Molecules/WordCardContent.vue'

export default {
    name: 'Dashboard',
    components: { Card, WordCardContent },
    setup() {
        const words = WORDS
        const step: Ref<number> = ref(0)

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
