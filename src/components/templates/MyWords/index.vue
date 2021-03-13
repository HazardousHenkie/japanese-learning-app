<template>
    <card>
        <list :items="words">
            <template #default="slotProps">
                <list-item-buttons
                    :item-id="slotProps.item.id"
                    :delete-function="deleteFunction"
                />
            </template>
        </list>
    </card>
</template>

<script lang="ts">
import { PropType } from 'vue'
import List from '@/components/organisms/List.vue'
import Word from '@/types/words'
import Card from '@/components/atoms/Card.vue'
import ListItemButtons from './components/molecules/ListItemButtons.vue'

export default {
    name: 'MyWords',
    components: { Card, List, ListItemButtons },
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
        deleteFunction: {
            type: Function,
            required: true,
            default: () => null
        }
    }
}
</script>
