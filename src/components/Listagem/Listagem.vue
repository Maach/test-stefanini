<template lang="pug">
    section#pets
        .wrapper
            Pet(v-for="pet in pets", :name="pet.name", :photos="pet.photos", :key="pet.name")
</template>

<script>
import Pet from '@/components/Pet/Pet.vue'

export default {
    name: 'component-listagem',
    components: {
        Pet,
    },
    props: {
        pets: {
            type: Array,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped src="./Listagem.scss"></style>