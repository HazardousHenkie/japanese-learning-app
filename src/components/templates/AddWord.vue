<template>
    <add-word-form :submit-function="submitFunction" />
</template>

<script lang="ts">
import AddWordForm from '@/components/organisms/AddWordForm.vue'

export default {
    name: 'AddWordTemplate',
    components: { AddWordForm },
    props: {
        submitFunction: {
            type: Function,
            require: true,
            default: () => null
        }
    }
}
</script>
