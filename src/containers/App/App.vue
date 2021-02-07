<template>
    <Navigation />

    <div class="container my-6 mx-auto px-6 md:px-12">
        <div class="flex flex-wrap md:mx-12">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import ROUTES from '@/utils/routes'
import Navigation from './organisms/Navigation/Navigation.vue'

export default {
    name: 'App',
    components: { Navigation },
    setup() {
        const routes = ROUTES

        return {
            routes
        }
    }
}
</script>
