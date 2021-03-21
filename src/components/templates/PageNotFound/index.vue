<template>
    <card>
        <custom-title title="404 Not found" />
    </card>
</template>

<script lang="ts">
import Card from '@/components/atoms/Card.vue'
import Title from '@/components/atoms/Title.vue'

export default {
    name: 'PageNotFoundTemplate',
    components: { Card, 'custom-title': Title }
}
</script>
