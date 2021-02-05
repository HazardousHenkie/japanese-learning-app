<template>
    <div class="word">
        <main class="grid h-screen place-items-center relative">
            <div class="relative h-96 w-96">
                <div
                    class="card bg-white transition shadow-xl w-96 h-96 rounded-3xl absolute bottom-0 z-10 grid place-items-center"
                >
                    <div
                        class="card bg-white shadow-inner h-4/5 w-3/4 rounded-2xl overflow-hidden relative"
                    >
                        <h1
                            class="shadow-md text-xl font-thin text-center text-gray-600 uppercase p-3"
                        >
                            漢字
                        </h1>

                        <button
                            class="card bg-gray-700 hover:bg-gray-600 transition text-white w-full h-1/6 absolute bottom-0 "
                        >
                            explenantion
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Home'
})
</script>
