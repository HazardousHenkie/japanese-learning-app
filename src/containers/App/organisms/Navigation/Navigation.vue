<template>
    <nav class="bg-gray-800">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center h-16">
                <Routes />

                <LoginButton />
                <LogoutButton />
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Routes from '../../molecules/Routes/Routes.vue'
import LoginButton from '../../molecules/LoginButton/index.vue'
import LogoutButton from '../../molecules/LogoutButton/index.vue'

export default {
    name: 'Navigation',
    components: { Routes, LoginButton, LogoutButton }
}
</script>
