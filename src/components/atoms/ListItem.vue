<template>
    <li class="p-4 text-gray-400 hover:bg-gray-700 cursor-pointer">
        {{ itemData }}
    </li>
</template>

<script lang="ts">
export default {
    name: 'ListItem',
    props: {
        itemData: {
            type: String,
            require: true,
            default: ''
        }
    }
}
</script>
