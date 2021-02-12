<template>
    Home
</template>

<script lang="ts">
import { inject } from 'vue'
import { AuthPlugin } from '../components/templates/Auth'
import { useRouter } from 'vue-router'
import ROUTES from '@/utils/routes'

export default {
    name: 'Home',
    setup() {
        const auth = inject('Auth') as AuthPlugin
        const isAuthenticated = auth.isAuthenticated

        const router = useRouter()

        if (isAuthenticated) {
            router.push(ROUTES.DASHBOARD)
        }
    }
}
</script>
