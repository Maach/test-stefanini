<template lang="pug">
    .pet(:class="{ loved }")
        img(:src="src", :srcset="srcset", :alt="name")
        h2 {{ name }}
        .actions
            button(@click="$store.dispatch('toggleLike', name)").fav.button Favoritar
            button(@click="$store.commit('adopt')").adopt.button Adote agora
</template>

<script>
export default {
    name: `component-pets`,
    props: {
        name: {
            type: String,
            required: true
        },
        photos: {
            type: Array,
            required: true
        },
    },
    computed: {
        loved() {
            return this.$store.getters.loved(this.name)
        },
        src() {
            return this.photos[0]
        },
        srcset() {
            let srcset = ``
            this.photos.forEach((photo, index) => {
                srcset += `${photo} ${index + 1}x`
                if (index < this.photos.length - 1)
                    srcset += `,`
            })
            return srcset
        }
    },
}
</script>

<style lang="scss" scoped src="./Pet.scss"></style>