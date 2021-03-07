<template>
    <div class="flex flex-col pb-6">
        <custom-label :name="name" :label="label" />

        <custom-input
            :name="name"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <error-message :error-message="errorMessage" />
    </div>
</template>

<script lang="ts">
import ErrorMessage from '@/components/atoms/ErrorMessage.vue'
import Label from '@/components/atoms/Label.vue'
import Input from '@/components/atoms/Input.vue'
export default {
    name: 'InputField',
    components: { ErrorMessage, 'custom-label': Label, 'custom-input': Input },
    props: {
        name: {
            type: String,
            require: true,
            default: ''
        },
        label: {
            type: String,
            require: true,
            default: ''
        },
        modelValue: {
            type: String,
            require: true,
            default: ''
        },
        errorMessage: {
            type: String,
            require: true,
            default: ''
        }
    },
    emits: ['update:modelValue']
}
</script>
