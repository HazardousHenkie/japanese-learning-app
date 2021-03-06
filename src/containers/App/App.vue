<template>
    <FullPageLoader v-if="authenticationIsloading" />

    <div v-else>
        <Navigation />

        <div class="container my-6 mx-auto px-6 md:px-12">
            <div class="flex flex-wrap md:mx-12">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import { AuthPlugin } from '@/Auth'

import FullPageLoader from '@/molecules/FullPageLoader.vue'
import Navigation from '@/organisms/Navigation.vue'

export default {
    name: 'App',
    components: { FullPageLoader, Navigation },
    setup() {
        const auth = inject('Auth') as AuthPlugin
        const authenticationIsloading = auth.loading

        return {
            authenticationIsloading
        }
    }
}
</script>
