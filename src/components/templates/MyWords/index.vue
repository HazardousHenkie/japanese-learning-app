<template>
    <card>
        <list :items="words" />
    </card>
</template>

<script lang="ts">
import { PropType } from 'vue'
import List from '@/components/organisms/List.vue'
import Word from '@/types/words'
import Card from '@/components/atoms/Card.vue'

export default {
    name: 'MyWords',
    components: { Card, List },
    props: {
        words: {
            type: Object as PropType<Word>,
            require: true,
            default: () => ({
                word: '',
                reading: '',
                meaning: ''
            })
        }
    }
}
</script>
