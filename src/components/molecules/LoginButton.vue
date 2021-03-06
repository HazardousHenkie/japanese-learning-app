<template>
    <button
        v-if="!isAuthenticated && !authenticationIsloading"
        class="ml-auto text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 ounded-md text-sm font-medium"
        @keyup.enter="login"
        @click="login"
    >
        Log in
    </button>
</template>

<script lang="ts">
import { inject } from 'vue'
import { AuthPlugin } from '@/Auth'

export default {
    name: 'LoginButtion',
    setup() {
        const auth = inject('Auth') as AuthPlugin
        const isAuthenticated = auth.isAuthenticated
        const authenticationIsloading = auth.loading

        const login = () => {
            auth.loginWithRedirect()
        }

        return {
            isAuthenticated,
            authenticationIsloading,
            login
        }
    }
}
</script>
