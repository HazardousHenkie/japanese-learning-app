<template>
    <button
        v-if="isAuthenticated && !authenticationIsloading"
        class="ml-auto text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 ounded-md text-sm font-medium"
        @keyup.enter="logout"
        @click="logout"
    >
        Log out
    </button>
</template>

<script lang="ts">
import { inject } from 'vue'
import { AuthPlugin } from '@/components/templates/Auth'

export default {
    name: 'Home',
    setup() {
        const auth = inject('Auth') as AuthPlugin
        const isAuthenticated = auth.isAuthenticated
        const authenticationIsloading = auth.loading

        const logout = () => {
            auth.logout({
                returnTo: window.location.origin
            })
        }

        return {
            isAuthenticated,
            authenticationIsloading,
            logout
        }
    }
}
</script>
