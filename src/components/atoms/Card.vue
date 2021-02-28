<template>
    <div
        class="overflow-hidden rounded-lg shadow-lg w-full bg-gray-800 flex flex-col content-center text-center items-center justify-center leading-tight p-10"
    >
        <slot />
    </div>
</template>

<script lang="ts">
export default {
    name: 'Card'
}
</script>
