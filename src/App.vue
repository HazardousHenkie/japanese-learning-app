<template>
    <nav class="bg-gray-800">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                        <router-link
                            class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                            to="/"
                            >Home</router-link
                        >
                        |
                        <router-link
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            to="/about"
                            >About</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <router-view />
</template>
