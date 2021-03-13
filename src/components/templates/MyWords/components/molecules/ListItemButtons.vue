<template>
    <div class="flex item-center justify-center ml-auto">
        <a
            :href="routes.EDIT_ITEM"
            class="w-4 ml-2 transform hover:text-purple-500 hover:scale-110"
        >
            <font-awesome-icon icon="edit" class="text-white text-lg m-0" />
        </a>
        <button
            class="w-4 ml-2 transform hover:text-purple-500 hover:scale-110"
            @click="deleteFunction(itemId)"
            @keyup.enter="deleteFunction(itemId)"
        >
            <font-awesome-icon icon="trash" class="text-white text-lg m-0" />
        </button>
    </div>
</template>

<script lang="ts">
import ROUTES from '@/utils/routes'

export default {
    name: 'ListItemButtons',
    props: {
        itemId: {
            type: String,
            required: true,
            default: ''
        },
        deleteFunction: {
            type: Function,
            required: true,
            default: () => null
        }
    },
    setup() {
        const routes = ROUTES

        return {
            routes
        }
    }
}
</script>
