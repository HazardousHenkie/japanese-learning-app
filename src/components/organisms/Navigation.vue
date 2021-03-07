<template>
    <nav class="bg-gray-800">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center h-16">
                <routes />

                <login-button />
                <logout-button />
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Routes from '@/components/molecules/Routes.vue'
import LoginButton from '@/components/molecules/LoginButton.vue'
import LogoutButton from '@/components/molecules/LogoutButton.vue'

export default {
    name: 'Navigation',
    components: { Routes, LoginButton, LogoutButton }
}
</script>
