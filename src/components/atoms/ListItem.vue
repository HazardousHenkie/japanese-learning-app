<template>
    <li
        class="p-4 text-white hover:bg-gray-700 flex items-center justify-center"
    >
        {{ itemData }}

        <slot />
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
