<template>
    <StyledMap ref="mapDivRef" class="map"></StyledMap>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'GoogleMaps',
    props: {
        lat: { type: Number, default: 38.0 },
        lng: { type: Number, default: -77.01 },

        zoom: { type: Number, default: 18 },
        mapType: { type: String, default: 'hybrid' },
        disableUI: { type: Boolean, default: false }
    },
    setup(props) {
        const map = ref(null)
        const mapDivRef = ref(null)

        onMounted(() => {
            const googleMapScript = document.createElement('SCRIPT')
            googleMapScript.setAttribute(
                'src',
                `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLEMAPS_KEY}&callback=initMap`
            )

            googleMapScript.setAttribute('defer', '')
            googleMapScript.setAttribute('async', '')

            document.head.appendChild(googleMapScript)
        })

        window.initMap = () => {
            map.value = new window.google.maps.Map(mapDivRef.value, {
                mapTypeId: props.mapType,
                zoom: props.zoom,
                disableDefaultUI: props.disableUI,
                center: { lat: props.lat, lng: props.lng }
            })
        }

        return {
            mapDivRef
        }
    }
}
</script>

<style lang="css" scoped>
.map {
    width: 100%;
    height: 100vh;
}
</style>
