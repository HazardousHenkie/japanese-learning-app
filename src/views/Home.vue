<template>
    <div class="home">
        <Map />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from '@/components/atoms/Map/Map.vue'

export default defineComponent({
    name: 'Home',
    components: {
        Map
    }
})
</script>
