<template lang="pug">
    .pet(:class="{ loved }")
        img(:src="src", :srcset="srcset", :alt="pet.name")
        .info
            h3 {{ pet.name }}
            p {{ pet.description }}
        .actions
            button(@click="$store.dispatch('toggleLike', pet.name)").fav.button Favoritar
            button(@click="$store.commit('adopt')").adopt.button Adote agora
</template>

<script>
export default {
    name: `component-pets`,
    props: {
        pet: {
            type: Object,
            required: true
        },
    },
    computed: {
        loved() {
            return this.$store.getters.loved(this.pet.name)
        },
        src() {
            return this.pet.photos[0]
        },
        srcset() {
            let srcset = ``
            this.pet.photos.forEach((photo, index) => {
                srcset += `${photo} ${index + 1}x`
                if (index < this.pet.photos.length - 1)
                    srcset += `,`
            })
            return srcset
        }
    },
}
</script>

<style lang="scss" scoped src="./Pet.scss"></style>