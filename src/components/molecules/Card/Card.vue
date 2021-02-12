<template>
    <div
        class="overflow-hidden rounded-lg shadow-lg w-full bg-gray-800 flex flex-col content-center text-center items-center justify-center leading-tight p-10"
    >
        <h1 class="text-6xl font-bold text-gray-300">
            {{ word.word }}
        </h1>

        <button @keyup.space="toggleMeaning" @click="toggleMeaning">
            <font-awesome-icon
                icon="chevron-down"
                class="text-4xl text-gray-300 mt-5"
            />
        </button>

        <div v-if="showMeaning" class="mt-5">
            <div class="text-2xl font-bold text-gray-300">
                {{ word.meaning }}
            </div>
            <div class="text-1xl font-bold text-gray-300">
                ({{ word.reading }})
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, Ref, watch, PropType } from 'vue'

type Word = {
    word: string
    reading: string
    meaning: string
}

export default {
    name: 'Card',
    props: {
        word: {
            type: Object as PropType<Word>,
            require: true,
            default: () => ({
                word: '',
                reading: '',
                meaning: ''
            })
        }
    },
    setup(
        props: Readonly<
            {
                word: Word
            } & {}
        >
    ) {
        const showMeaning: Ref<boolean> = ref(false)

        const toggleMeaning = () => {
            showMeaning.value = !showMeaning.value
        }

        watch(
            () => props.word.word,
            (previousWord, currentWord) => {
                if (previousWord !== currentWord) {
                    showMeaning.value = false
                }
            }
        )

        return {
            showMeaning,
            toggleMeaning
        }
    }
}
</script>
