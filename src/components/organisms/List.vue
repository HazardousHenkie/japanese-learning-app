<template>
    <ul class="w-full divide-y divide-gray-300">
        <list-item v-for="item in items" :key="item.id" :item-data="item.word">
            <slot :item="item" />
        </list-item>
    </ul>
</template>

<script lang="ts">
import ListItem from '../atoms/ListItem.vue'

export default {
    name: 'List',
    components: { ListItem },
    props: {
        items: {
            type: Object,
            require: true,
            default: () => ({})
        }
    }
}
</script>
