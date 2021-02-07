<template>
    <nav class="bg-gray-800">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                        <Routes />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Routes from '../../molecules/Routes/Routes.vue'

export default {
    name: 'Navigation',
    components: { Routes }
}
</script>
