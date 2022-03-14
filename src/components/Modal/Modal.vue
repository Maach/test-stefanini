<template lang="pug">
    transition(name="component-aside")
        aside(v-if="active", ref="modal", @click.self="close", @keydown.esc="close", tabindex="0").modal
            .content(:style="{ background }")
                button(@click="close").close X
                img(:src="src", :srcset="srcset")
                .text
                    h2 {{ title }}
                    p {{ text }}
</template>

<script>
export default {
    name: 'component-modal',
    props: {
        title: {
            type: String,
            required: true
        },
        background: {
            type: String,
            required: true
        },
        text: {
            type: String,
            default: ''
        },
        images: {
            type: Array,
            required: true
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        src() {
            return this.images[0]
        },
        srcset() {
            let srcset = ``
            this.images.forEach((photo, index) => {
                srcset += `${photo} ${index + 1}x`
                if (index < this.images.length - 1)
                    srcset += `,`
            })
            return srcset
        },
    },
    watch: {
        'active': function() {
            if (this.active) {
                document.querySelector('html').classList.add('overflow-hidden')
                document.querySelector('body').classList.add('overflow-hidden')
                setTimeout(() => this.$refs.modal.focus(), 500)
            } else {
                document.querySelector('html').classList.remove('overflow-hidden')
                document.querySelector('body').classList.remove('overflow-hidden')
            }
        },
    },
    methods: {
        close() {
            this.$store.commit('closeModal')
        }
    }
}
</script>

<style lang="scss" scoped src="./Modal.scss"></style>
<style lang="scss">
    html, body {
        &.overflow-hidden {
            overflow: hidden !important
        }
    }
</style>