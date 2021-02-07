<template>
    <router-link
        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 ounded-md text-sm font-medium"
        :to="routes.HOME"
        >Home
    </router-link>

    <!-- <router-link
        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        :to="routes.ABOUT"
        >About
    </router-link> -->
</template>

<script lang="ts">
import ROUTES from '@/utils/routes'

export default {
    name: 'Routes',
    setup() {
        const routes = ROUTES

        return {
            routes
        }
    }
}
</script>
