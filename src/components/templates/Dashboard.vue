<template>
    {{ step }}

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
        <card>
            <word-card-content :word="words[step]" :step="step" />
        </card>

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
import { PropType } from 'vue'
import Card from '@/components/atoms/Card.vue'
import WordCardContent from '@/components/organisms/WordCard.vue'
import Word from '@/types/words'

export default {
    name: 'DashboardTemplate',
    components: { Card, WordCardContent },
    props: {
        words: {
            type: Object as PropType<Word>,
            require: true,
            default: () => ({
                word: '',
                reading: '',
                meaning: ''
            })
        },
        step: {
            type: Number,
            required: true,
            default: 0
        },
        previousStep: {
            type: Function,
            required: true,
            default: () => null
        },
        nextStep: {
            type: Function,
            required: true,
            default: () => null
        }
    }
}
</script>
